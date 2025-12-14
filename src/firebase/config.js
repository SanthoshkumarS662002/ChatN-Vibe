import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_of3j7Ndm9nYs11RDXdOkChfTOqlWUmY",
    authDomain: "chatn-vibe.firebaseapp.com",
    databaseURL: "https://chatn-vibe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatn-vibe",
    storageBucket: "chatn-vibe.firebasestorage.app",
    messagingSenderId: "385473178156",
    appId: "1:385473178156:web:b008691b5ebac0587dbf89",
    measurementId: "G-3BZVL1VZKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { analytics };
