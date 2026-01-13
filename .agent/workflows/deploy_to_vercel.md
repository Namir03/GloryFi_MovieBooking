---
description: Deploy the GloryFi client application to Vercel
---

# Deploy to Vercel

Follow these steps to host your application on Vercel.

1.  **Install Vercel CLI** (if not already installed)
    ```bash
    npm i -g vercel
    ```

2.  **Login to Vercel**
    ```bash
    vercel login
    ```

3.  **Deploy Project**
    Run the deploy command from the `client` directory:
    ```bash
    cd client
    vercel
    ```
    
    **Interactive Setup Guide:**
    - **Set up and deploy "client"?** -> `y`
    - **Which scope do you want to deploy to?** -> Select your account.
    - **Link to existing project?** -> `n`
    - **What’s your project’s name?** -> `gloryfi-movie-booking`
    - **In which directory is your code located?** -> `./`
    - **Want to modify these settings?** -> `n` (Vite defaults are correct: `npm run build` / `dist`)

4.  **Add Environment Variables** (Critical!)
    Your app needs the Clerk and Razorpay keys to work in production.
    
    - Go to the **Vercel Dashboard** for your project.
    - Navigate to **Settings** > **Environment Variables**.
    - Add the following keys (copy from your `.env`):
      - `VITE_CLERK_PUBLISHABLE_KEY`
      - `VITE_RAZORPAY_KEY_ID`
    
    *Note: After adding variables, you may need to redeploy (`vercel --prod`) for them to take effect.*
