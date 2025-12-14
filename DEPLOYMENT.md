# Deploying ChatN'Vibe to Vercel

The user selected Vercel for hosting to keep it free and simple.

## Option 1: Vercel CLI (Recommended)

1.  **Install Vercel CLI**:
    ```bash
    npm install -g vercel
    ```

2.  **Login**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run this command in your project folder:
    ```bash
    vercel
    ```

    *   Accept all default settings (press Enter for everything).
    *   It will upload your `dist` folder or build it automatically.

## Option 2: Vercel Dashboard (GitHub)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel.com](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  Vercel will detect it's a **Vite** project automatically.
6.  Click **Deploy**.

## Important Notes

*   **Firebase Config**: Your app still uses Firebase for the database and authentication. This remains on the free "Spark" plan.
*   **Real-time Features**: These will continue to work perfectly because they connect directly to Firebase from the user's browser, regardless of where the website file is hosted.
*   **Authorized Domains**: After deploying, you will get a URL like `chatnvibe.vercel.app`.
    *   Go to **Firebase Console** -> **Authentication** -> **Settings** -> **Authorized Domains**.
    *   Add your new Vercel domain there to ensure sign-ins work.
