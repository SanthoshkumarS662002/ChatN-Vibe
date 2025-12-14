# ChatN'Vibe - Critical Setup Steps

## URGENT: Create Firestore Index

**The app will NOT work until you create this index!**

1. **Click this link**: [Create Firestore Index](https://console.firebase.google.com/v1/r/project/chatn-vibe/firestore/indexes?create_composite=Cktwcm9qZWN0cy9jaGF0bi12aWJlL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9tZXNzYWdlcy9pbmRleGVzL18QARoNCglzZXNzaW9uSWQQARoNCgljcmVhdGVkQXQQARoMCghfX25hbWVfXxAB)

2. Click **"Create Index"** button

3. Wait 2-5 minutes for the index to build (status will show "Building..." then "Enabled")

4. Once enabled, refresh your app

## To Clear Age Gate (for testing)

If you need to see the age gate again:
1. Open browser console (F12)
2. Type: `localStorage.clear()`
3. Press Enter
4. Refresh the page

## Testing the Chat

1. Open two browser windows (one normal, one incognito)
2. In both: Accept age gate → Click "Start Chatting"
3. First window will show "Searching..."
4. Second window should match with first
5. Both should show chat interface
6. Send messages - they should appear in both windows

## Current Status

- ✅ Fixed matching logic
- ✅ Fixed message display
- ✅ Updated Firestore rules
- ⏳ **WAITING**: You need to create the Firestore index (see link above)
