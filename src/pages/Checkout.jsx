import React, { useState, useContext } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/pages/checkout.css'

export default function Checkout() {
  const { planId } = useParams()
  const navigate = useNavigate()
  const { user, isAuthenticated, upgradeToPremium } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  const plans = {
    2: {
      name: 'Premium',
      price: 100,
      duration: '1 Month'
    },
    3: {
      name: 'Annual Premium',
      price: 999,
      duration: '1 Year'
    }
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const plan = plans[planId]

  if (!plan) {
    return <Navigate to="/premium" replace />
  }

  const handlePayment = async () => {
    setLoading(true)

    try {
      const { createOrder, handleRazorpayPayment } = await import('../services/razorpayService')
      
      const order = await createOrder(plan.price, plan.name.toLowerCase())
      
      if (order && order.success) {
        const paymentSuccess = await handleRazorpayPayment(
          order,
          user.email,
          user.user_metadata?.full_name || user.email,
          user.id,
          plan.name.toLowerCase()
        )

        if (paymentSuccess) {
          // Sync with profile
          await upgradeToPremium(plan.name.toLowerCase(), order.orderId)
          
          setOrderDetails({
            paymentId: order.orderId,
            status: 'success',
            amount: plan.price,
            planName: plan.name
          })

          setTimeout(() => {
            navigate('/dashboard')
          }, 3000)
        }
      }
    } catch (error) {
      alert('Error processing payment: ' + (error.message || 'Payment failed'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        {orderDetails && orderDetails.status === 'success' ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Payment Successful!</h2>
            <p>Welcome to Premium, {user?.full_name || user?.user_metadata?.full_name || user?.email}!</p>
            <div className="order-info">
              <p><strong>Order ID:</strong> {orderDetails.paymentId}</p>
              <p><strong>Plan:</strong> {orderDetails.planName}</p>
              <p><strong>Amount Paid:</strong> ₹{orderDetails.amount}</p>
            </div>
            <p className="redirect-text">Redirecting to dashboard...</p>
          </div>
        ) : (
          <>
            <h1>Complete Your Purchase</h1>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>{plan.name}</span>
                <span>₹{plan.price}</span>
              </div>
              <div className="summary-item">
                <span>Duration</span>
                <span>{plan.duration}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total Amount</span>
                <span>₹{plan.price}</span>
              </div>
            </div>

            <div className="customer-info">
              <h3>Customer Information</h3>
              <div className="info-display">
                <p><strong>Name:</strong> {user?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0]}</p>
                <p><strong>Email:</strong> {user?.email}</p>
              </div>
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>
              <p>We accept all major payment methods:</p>
              <div className="payment-icons">
                <span>💳 Cards</span>
                <span>🏦 UPI</span>
                <span>📱 Digital Wallets</span>
              </div>
              <p className="powered-by">Powered by Razorpay</p>
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button
              className="pay-button"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? 'Processing...' : `Pay ₹${plan.price}`}
            </button>

            <button className="cancel-button" onClick={() => navigate('/premium')}>
              Back to Plans
            </button>
          </>
        )}
      </div>
    </div>
  )
}
