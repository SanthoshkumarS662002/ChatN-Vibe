import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInAnonymously, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signIn = async () => {
        try {
            const result = await signInAnonymously(auth);
            // Set default display name if not set
            if (!result.user.displayName) {
                // We can't update profile immediately on creation sometimes, 
                // but let's try or handle it in the UI
                // await updateProfile(result.user, { displayName: 'Anonymous' });
            }
            return result.user;
        } catch (error) {
            console.error("Error signing in anonymously:", error);
            throw error;
        }
    };

    const updateDisplayName = async (name) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: name });
            // Force refresh user object
            setUser({ ...auth.currentUser });
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signIn, updateDisplayName }}>
            {children}
        </AuthContext.Provider>
    );
};
