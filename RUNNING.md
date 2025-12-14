# How to Run ChatN'Vibe Locally

## Prerequisites
- Node.js installed (v16 or higher)
- A terminal (PowerShell, Command Prompt, or VS Code Terminal)

## Quick Start

1.  **Open a terminal** in the project folder:
    `c:\Users\santh\OneDrive\Projects\ChatN'Vibe`

2.  **Install Dependencies** (only needed once):
    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    ```bash
    npm run dev
    ```

4.  **Open the App**:
    - The terminal will show a URL, usually `http://localhost:5173` (or 5174, 5175 if busy).
    - Ctrl+Click the link or copy-paste it into your browser.

## Troubleshooting
- **"Port in use"**: The script will automatically try the next available port. Just check the terminal output for the correct URL.
- **"Firebase error"**: Ensure your `.env` file is set up correctly with your Firebase config keys.
