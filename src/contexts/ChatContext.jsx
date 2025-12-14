import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp,
    doc,
    updateDoc,
    limit
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
    const { user } = useAuth();
    const [sessionId, setSessionId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isMatching, setIsMatching] = useState(false);
    const [partner, setPartner] = useState(null);
    const [partnerTyping, setPartnerTyping] = useState(false);

    // Clear any stale session on mount
    useEffect(() => {
        setSessionId(null);
        setMessages([]);
        setPartner(null);
        setPartnerTyping(false);
    }, []);

    // Listen for session updates
    useEffect(() => {
        if (!sessionId) return;

        const sessionRef = doc(db, 'sessions', sessionId);
        const unsubscribe = onSnapshot(sessionRef, (doc) => {
            if (doc.exists()) {
                const data = doc.data();

                // Handle typing status
                if (data.typing) {
                    // Check if the OTHER user is typing
                    const otherUserId = data.userAId === user?.uid ? data.userBId : data.userAId;
                    if (otherUserId && data.typing[otherUserId]) {
                        setPartnerTyping(true);
                    } else {
                        setPartnerTyping(false);
                    }
                } else {
                    setPartnerTyping(false);
                }

                if (data.status === 'ended') {
                    // Do NOT clear session immediately. Let user stay.
                    // Just mark it locally or add a system message if not already added
                    setMessages(prev => {
                        if (prev.some(m => m.isSystem && m.text.includes('disconnected'))) return prev;

                        // Try to find partner name from previous messages (exclude system messages)
                        const partnerMsg = prev.find(m => !m.isSystem && m.fromUserId && m.fromUserId !== user?.uid);
                        const partnerName = partnerMsg?.displayName || 'Stranger';

                        return [...prev, {
                            id: 'system-end-' + Date.now(),
                            text: `${partnerName} has disconnected.`,
                            isSystem: true,
                            createdAt: new Date()
                        }];
                    });
                }
            }
        });

        return unsubscribe;
    }, [sessionId]);

    // Listen for messages
    useEffect(() => {
        if (!sessionId) return;

        const q = query(
            collection(db, 'messages'),
            where('sessionId', '==', sessionId),
            orderBy('createdAt', 'asc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Find partner's name from messages (exclude system messages)
            const partnerMsg = msgs.find(m => !m.isSystem && m.fromUserId && m.fromUserId !== user?.uid);
            const partnerName = partnerMsg?.displayName || 'Stranger';

            // Update partner state if name found and different
            if (partnerMsg && (!partner || partner.displayName !== partnerName)) {
                setPartner({ uid: partnerMsg.fromUserId, displayName: partnerName });
            }

            // Prepend join message with partner's name
            const systemMsg = {
                id: 'system-start',
                text: `${partnerName} has joined.`,
                isSystem: true,
                createdAt: msgs[0]?.createdAt || new Date()
            };

            setMessages([systemMsg, ...msgs]);
        });

        return unsubscribe;
    }, [sessionId, user]);

    const startMatching = async () => {
        if (!user) return;
        setIsMatching(true);

        // Simple client-side matching simulation for MVP
        // In production, use Cloud Functions or a proper queue system
        try {
            // 1. Check if anyone is waiting in 'queue'
            // This is a simplified approach. 
            // Real implementation needs transactions or Cloud Functions to avoid race conditions.

            // For now, let's just create a session with a placeholder or wait logic
            // We'll implement the actual queue logic in a separate hook or service

        } catch (error) {
            console.error("Matching error:", error);
            setIsMatching(false);
        }
    };

    const sendMessage = async (text, imageURL = null, requestPic = false, isIcebreaker = false) => {
        if (!sessionId || !user) return;

        try {
            await addDoc(collection(db, 'messages'), {
                sessionId,
                fromUserId: user.uid,
                displayName: user.displayName || 'Anonymous',
                text,
                imageURL,
                requestPic,
                isIcebreaker,
                createdAt: serverTimestamp(),
                flags: []
            });
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const endChat = async () => {
        if (!sessionId) return;

        try {
            await updateDoc(doc(db, 'sessions', sessionId), {
                status: 'ended',
                endedAt: serverTimestamp()
            });
            setSessionId(null);
            setMessages([]);
            setPartner(null);
        } catch (error) {
            console.error("Error ending chat:", error);
        }
    };

    const setTyping = async (isTyping) => {
        if (!sessionId || !user) return;

        try {
            const sessionRef = doc(db, 'sessions', sessionId);
            await updateDoc(sessionRef, {
                [`typing.${user.uid}`]: isTyping
            });
        } catch (error) {
            console.error("Error updating typing status:", error);
        }
    };

    return (
        <ChatContext.Provider value={{
            sessionId,
            messages,
            isMatching,
            partner,
            partnerTyping,
            startMatching,
            sendMessage,
            endChat,
            setSessionId, // Exposed for useMatch hook
            setIsMatching, // Exposed for useMatch hook
            setPartner, // Exposed for useMatch hook
            setTyping
        }}>
            {children}
        </ChatContext.Provider>
    );
};
