import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useChat } from '../contexts/ChatContext';
import { v4 as uuidv4 } from 'uuid';

export const useUpload = () => {
    const { user } = useAuth();
    const { sessionId } = useChat();
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);

    const uploadImage = async (file) => {
        if (!user || !sessionId || !file) return null;

        // Validation
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
            setError('Only JPG, PNG, and WebP images are allowed.');
            return null;
        }
        if (file.size > 3 * 1024 * 1024) { // 3MB
            setError('Image size must be less than 3MB.');
            return null;
        }

        setError(null);
        setUploading(true);
        setProgress(0);

        const fileExt = file.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const storageRef = ref(storage, `uploads/${sessionId}/${fileName}`);

        return new Promise((resolve, reject) => {
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(p);
                },
                (err) => {
                    console.error("Upload error:", err);
                    setError("Failed to upload image.");
                    setUploading(false);
                    reject(err);
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setUploading(false);
                        resolve(downloadURL);
                    } catch (err) {
                        console.error("Get URL error:", err);
                        setError("Failed to get image URL.");
                        setUploading(false);
                        reject(err);
                    }
                }
            );
        });
    };

    return { uploadImage, uploading, progress, error };
};
