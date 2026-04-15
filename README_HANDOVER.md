# 🎬 The Legend Prabhas - Handover Guide

Welcome to the ownership of **The Legend Prabhas**. This premium fan portal is built with a modern React stack and designed for performance and scale. Follow these instructions to set up the backend and payment systems under your own accounts.

---

## 🚀 1. Technology Stack
*   **Frontend**: React 18, Vite, Framer Motion (Animations), Vanilla CSS.
*   **Backend/Auth**: Supabase.
*   **Payments**: Razorpay.
*   **Deployment**: Optimized for Vercel, Netlify, or Hostinger.

---

## 🔑 2. Environment Setup
Create a `.env` file in the root directory and populate it with your own API keys. **Do not share this file.**

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Razorpay Configuration (For Payments)
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Deployment URL (Used for payment verification callbacks)
VITE_APP_URL=https://your-domain.com
```

---

## 🗄️ 3. Supabase Setup
To ensure the Login and Subscription systems work, follow these steps in your Supabase Dashboard:

1.  **Authentication**: Enable "Email/Password" sign-in.
2.  **Database Tables**: Ensure you have a `profiles` table that tracks user metadata and subscription status.
    *   `id` (UUID, primary key)
    *   `email` (Text)
    *   `full_name` (Text)
    *   `subscription_status` (Text: 'free', 'premium', 'elite')
3.  **Realtime**: Enable Realtime for the `profiles` table to allow instant UI updates.

---

## 💰 4. Razorpay Integration
1.  Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com/).
2.  Go to **Settings > API Keys** and generate new Test/Live keys.
3.  Update the `VITE_RAZORPAY_KEY_ID` in your `.env` file.
4.  Ensure your webhook is pointed to `https://your-domain.com/api/verify-payment`.

---

## 📽️ 5. Managing Content
All movie data, news, and reviews are managed via a single file:
`src/data/prabhasData.js`

To add a new movie, simply add a new object to the `movies` array. The 3D gallery and streaming hub will update automatically.

---

## 🛠️ 6. Deployment
To build the production bundle:
```bash
npm install
npm run build
```
Upload the contents of the `dist/` folder to your hosting provider.

---

**Support**: For any technical questions during the first 15 days of handover, please contact the seller directly.
