// Razorpay Payment Integration API
// This runs on Vercel serverless functions

import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, currency = 'INR', receipt, notes } = req.body;

      const options = {
        amount: amount * 100, // Convert to paise
        currency,
        receipt,
        notes,
      };

      const order = await razorpay.orders.create(options);
      
      res.status(200).json({
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      });
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
