import React, { useState } from 'react';
import { Flag, X } from 'lucide-react';
import { addDoc, collection, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { useChat } from '../../contexts/ChatContext';

const ReportModal = ({ onClose, onReportSubmitted }) => {
    const { user } = useAuth();
    const { sessionId, partner } = useChat(); // Note: partner might not be fully available in context yet, need to fix if so
    const [category, setCategory] = useState('Harassment');
    const [notes, setNotes] = useState('');
    const [blockUser, setBlockUser] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || !sessionId) return;

        // Client-side rate limit check (1 hour)
        const lastReportTime = localStorage.getItem(`last_report_${sessionId}`);
        if (lastReportTime) {
            const timeDiff = Date.now() - parseInt(lastReportTime);
            if (timeDiff < 3600000) { // 1 hour in ms
                alert("You have already reported this user recently. Please wait before reporting again.");
                return;
            }
        }

        setSubmitting(true);
        try {
            // Create report
            await addDoc(collection(db, 'reports'), {
                reporterId: user.uid,
                reportedSessionId: sessionId,
                category,
                notes,
                createdAt: serverTimestamp(),
                status: 'pending'
            });

            // Save report time for rate limiting
            localStorage.setItem(`last_report_${sessionId}`, Date.now().toString());

            // Handle blocking
            if (blockUser) {
                console.log("Blocking user from session:", sessionId);
            }

            // Show immediate feedback
            alert("Thanks — our team will review.");

            onReportSubmitted(blockUser);
            onClose();
        } catch (error) {
            console.error("Error submitting report:", error);
            alert("Failed to submit report. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-card border border-input rounded-2xl shadow-xl animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-4 border-b border-input">
                    <h3 className="font-semibold flex items-center gap-2">
                        <Flag className="w-5 h-5 text-red-500" />
                        Report User
                    </h3>
                    <button onClick={onClose} className="p-1 hover:bg-input rounded-full">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Reason</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 rounded-lg bg-input border-none focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="Harassment">Harassment</option>
                            <option value="Spam">Spam</option>
                            <option value="Sexual Content">Sexual Content</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Details (Optional)</label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full p-2 rounded-lg bg-input border-none focus:ring-2 focus:ring-primary outline-none resize-none h-24"
                            placeholder="Please provide more details..."
                            maxLength={500}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="blockUser"
                            checked={blockUser}
                            onChange={(e) => setBlockUser(e.target.checked)}
                            className="rounded border-input text-primary focus:ring-primary"
                        />
                        <label htmlFor="blockUser" className="text-sm">
                            Block this user
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors disabled:opacity-70"
                        >
                            {submitting ? 'Submitting...' : 'Submit Report'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReportModal;
