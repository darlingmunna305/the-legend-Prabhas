// Verify Razorpay Payment Signature
import crypto from 'crypto';
import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role for admin access
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId,
        planType
      } = req.body;

      // Verify signature
      const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
      hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
      const generated_signature = hmac.digest('hex');

      if (generated_signature === razorpay_signature) {
        // Update user profile in Supabase
        if (userId) {
          const expiryDate = new Date();
          expiryDate.setMonth(expiryDate.getMonth() + 1);

          const { error: profileError } = await supabase
            .from('profiles')
            .update({
              subscription: planType || 'loyal_fan',
              isPremium: true,
              expiry_date: expiryDate.toISOString(),
              last_payment_id: razorpay_payment_id
            })
            .eq('id', userId);

          if (profileError) {
            console.error('Supabase profile update error:', profileError);
          }
        }

        res.status(200).json({
          success: true,
          message: 'Payment verified and profile updated',
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
        });
      } else {
        res.status(400).json({
          success: false,
          message: 'Invalid signature',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
