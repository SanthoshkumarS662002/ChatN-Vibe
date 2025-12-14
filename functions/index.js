const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// Thresholds
const TEMP_MITIGATE_THRESHOLD = 50;
const AUTO_BAN_THRESHOLD = 100;

// Category Weights
const CATEGORY_WEIGHTS = {
    'Harassment': 20,
    'Spam': 10,
    'Sexual Content': 30,
    'Other': 5
};

exports.processReport = functions.firestore
    .document('reports/{reportId}')
    .onCreate(async (snap, context) => {
        const report = snap.data();
        const { reporterId, reportedSessionId, category } = report;
        const reportId = context.params.reportId;

        // 1. Rate-limit check: Count reports from same reporter in last hour
        const oneHourAgo = admin.firestore.Timestamp.fromMillis(Date.now() - 3600000);
        const recentReports = await db.collection('reports')
            .where('reporterId', '==', reporterId)
            .where('createdAt', '>', oneHourAgo)
            .get();

        if (recentReports.size > 5) { // Limit to 5 reports per hour per user
            console.log(`Rate limit exceeded for reporter ${reporterId}`);
            return snap.ref.update({ status: 'rejected_rate_limit' });
        }

        // 2. Message Snapshot: Copy messages to evidence archive
        const messagesSnapshot = await db.collection('messages')
            .where('sessionId', '==', reportedSessionId)
            .orderBy('createdAt')
            .get();

        const evidence = messagesSnapshot.docs.map(doc => doc.data());

        await db.collection('reports_archive').doc(reportId).set({
            ...report,
            evidence: evidence,
            archivedAt: admin.firestore.FieldValue.serverTimestamp()
        });

        // 3. Compute Weighted Score
        // In a real app, we'd identify the reported user ID from the session
        // For this MVP, we'll assume we can get it from the session doc
        const sessionDoc = await db.collection('sessions').doc(reportedSessionId).get();
        const sessionData = sessionDoc.data();

        // Identify reported user (the one who isn't the reporter)
        let reportedUserId = null;
        if (sessionData.userAId === reporterId) reportedUserId = sessionData.userBId;
        else if (sessionData.userBId === reporterId) reportedUserId = sessionData.userAId;

        if (!reportedUserId) {
            console.log("Could not identify reported user");
            return;
        }

        const score = CATEGORY_WEIGHTS[category] || 5;

        // Update reported user's risk score
        const userRef = db.collection('users').doc(reportedUserId);

        await db.runTransaction(async (t) => {
            const userDoc = await t.get(userRef);
            const userData = userDoc.data() || {};

            // Track unique reporters
            const currentReporters = userData.reporters || [];
            if (!currentReporters.includes(reporterId)) {
                currentReporters.push(reporterId);
            }

            const uniqueReportCount = currentReporters.length;
            const currentScore = (userData.riskScore || 0) + score;

            let mitigationStatus = userData.mitigationStatus || 'none';

            // 4. Apply Mitigation
            // Ban if reported by 20+ unique users OR score is very high
            if (uniqueReportCount >= 20 || currentScore > AUTO_BAN_THRESHOLD) {
                mitigationStatus = 'banned';
                // Add to admin queue
                await db.collection('admin_queue').add({
                    type: 'ban_review',
                    userId: reportedUserId,
                    reason: uniqueReportCount >= 20 ? 'Report threshold exceeded' : 'High risk score',
                    score: currentScore,
                    reportCount: uniqueReportCount,
                    createdAt: admin.firestore.FieldValue.serverTimestamp()
                });
            } else if (currentScore > TEMP_MITIGATE_THRESHOLD) {
                mitigationStatus = 'shadowban';
            }

            t.set(userRef, {
                riskScore: currentScore,
                reporters: currentReporters,
                reportCount: uniqueReportCount,
                mitigationStatus: mitigationStatus,
                lastReportedAt: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        });

        return snap.ref.update({ status: 'processed', reportedUserId });
    });
