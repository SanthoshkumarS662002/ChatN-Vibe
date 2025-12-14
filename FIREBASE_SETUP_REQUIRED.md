# CRITICAL: Firebase Storage Rules Setup

## The image upload is failing because Storage rules are not deployed.

### Step-by-Step Fix:

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: ChatN'Vibe
3. **Click "Storage" in the left sidebar**
4. **Click the "Rules" tab at the top**
5. **Delete everything and paste this**:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

6. **Click "Publish"** button
7. **Wait 10 seconds** for rules to propagate
8. **Refresh your app** and try uploading again

---

## If you still get errors:

Check the browser console (F12) and send me the EXACT error message.

The error should now be gone after publishing the Storage rules.
