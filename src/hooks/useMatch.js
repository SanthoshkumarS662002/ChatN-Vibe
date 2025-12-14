import { useState, useRef, useEffect } from 'react';
import {
    collection,
    query,
    serverTimestamp,
    doc,
    deleteDoc,
    getDocs,
    limit,
    setDoc,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useChat } from '../contexts/ChatContext';

export const useMatch = () => {
    const { user } = useAuth();
    const { setSessionId, setIsMatching } = useChat();
    const [error, setError] = useState(null);
    const matchListenerRef = useRef(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (matchListenerRef.current) {
                matchListenerRef.current();
            }
        };
    }, []);

    const findMatch = async () => {
        if (!user) {
            console.error("No user found");
            return;
        }

        setError(null);
        setIsMatching(true);

        try {
            // Step 1: Check if anyone is waiting in the queue
            const queueQuery = query(
                collection(db, 'queue'),
                limit(10) // Get up to 10 waiting users
            );

            const queueSnapshot = await getDocs(queueQuery);

            // Filter out ourselves from the results
            const availableUsers = queueSnapshot.docs.filter(
                doc => doc.data().userId !== user.uid
            );

            if (availableUsers.length > 0) {
                // Found someone waiting! Match with the first one
                const partnerDoc = availableUsers[0];
                const partnerId = partnerDoc.data().userId;

                // Create a new session
                const sessionRef = doc(collection(db, 'sessions'));
                await setDoc(sessionRef, {
                    userAId: partnerId,
                    userBId: user.uid,
                    status: 'active',
                    startedAt: serverTimestamp(),
                    endedAt: null
                });

                // Remove partner from queue
                await deleteDoc(partnerDoc.ref);

                // Set our session
                setSessionId(sessionRef.id);
                setIsMatching(false);

                console.log("Matched with existing user:", partnerId);
            } else {
                // No one waiting, add ourselves to queue
                const myQueueRef = doc(db, 'queue', user.uid);
                await setDoc(myQueueRef, {
                    userId: user.uid,
                    createdAt: serverTimestamp()
                });

                console.log("Added to queue, waiting for match...");

                // Store the time we started searching
                const searchStartTime = new Date();

                // Listen for when someone creates a session with us
                const sessionQuery = query(
                    collection(db, 'sessions')
                );

                matchListenerRef.current = onSnapshot(sessionQuery, (snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === 'added') {
                            const data = change.doc.data();
                            const sessionCreatedAt = data.startedAt?.toDate();

                            // Only match with sessions created AFTER we started searching
                            // This prevents matching with old sessions
                            if (data.status === 'active' &&
                                (data.userAId === user.uid || data.userBId === user.uid) &&
                                sessionCreatedAt && sessionCreatedAt >= searchStartTime) {
                                console.log("Match found! Session:", change.doc.id);
                                setSessionId(change.doc.id);
                                setIsMatching(false);

                                // Remove ourselves from queue
                                deleteDoc(myQueueRef).catch(console.error);

                                // Stop listening
                                if (matchListenerRef.current) {
                                    matchListenerRef.current();
                                    matchListenerRef.current = null;
                                }
                            }
                        }
                    });
                });


            }

        } catch (err) {
            console.error("Matching error:", err);
            setError(err.message || "Failed to find a match");
            setIsMatching(false);
        }
    };

    const cancelMatch = async () => {
        if (user) {
            const myQueueRef = doc(db, 'queue', user.uid);
            await deleteDoc(myQueueRef).catch(() => { });
        }

        if (matchListenerRef.current) {
            matchListenerRef.current();
            matchListenerRef.current = null;
        }

        setIsMatching(false);
    };

    return { findMatch, cancelMatch, error };
};
