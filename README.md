# ChatN'Vibe

Anonymous random chat web application built with React, Vite, and Firebase.

## Features
- **Anonymous Chat**: Instant matching with random users.
- **Real-time Messaging**: Fast and reliable using Firestore.
- **Image Sharing**: "Request-a-Pic" feature and secure image uploads.
- **Safety**: Age gate (21+), profanity filter, and report/block system.
- **Theming**: Light, Dark, and Love themes.
- **Mobile-First**: Optimized for mobile devices.

## Setup

1.  **Clone the repository**
2.  **Install dependencies**: `npm install`
3.  **Configure Firebase**:
    - Create a Firebase project.
    - Enable Authentication (Anonymous).
    - Enable Firestore and Storage.
    - Copy `.env.example` to `.env` and fill in your credentials.
4.  **Run locally**: `npm run dev`

## Deployment

1.  **Build**: `npm run build`
2.  **Deploy**: `firebase deploy` (or use Vercel/Netlify)

## AdSense Integration

To enable ads:
1.  Get your AdSense code.
2.  Replace the placeholder divs in `src/App.jsx` (search for `ad-header` and `ad-inline`) with your ad code or components.
