import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/pages/premium.css'

export default function Premium() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useContext(AuthContext)

  const plans = [
    {
      id: 1,
      name: 'Free',
      price: 0,
      duration: 'Forever',
      description: 'Basic access to all content',
      features: [
        'Browse movies and trailers',
        'Read actor biography',
        'View news and updates',
        'Write reviews',
        'Basic movie information'
      ],
      color: '#999999',
      cta: 'You are on this plan'
    },
    {
      id: 2,
      name: 'Premium',
      price: 100,
      duration: '1 Month',
      description: 'Enhanced access and exclusive features',
      features: [
        '✅ Everything in Free',
        '✅ Ad-free experience',
        '✅ Exclusive trailers & behind-the-scenes',
        '✅ Early access to movie news',
        '✅ Premium quality reviews',
        '✅ Download trailers & articles',
        '✅ VIP fan community forum',
        '✅ Exclusive interviews'
      ],
      color: '#d4af37',
      cta: 'Upgrade now',
      recommended: true
    },
    {
      id: 3,
      name: 'Annual Premium',
      price: 999,
      duration: '1 Year',
      description: 'Best value - save 2 months!',
      features: [
        '✅ Everything in Free',
        '✅ Ad-free experience',
        '✅ Exclusive trailers & behind-the-scenes',
        '✅ Early access to movie news',
        '✅ Premium quality reviews',
        '✅ Download trailers & articles',
        '✅ VIP fan community forum',
        '✅ Exclusive interviews',
        '✅ Priority customer support'
      ],
      color: '#ffd700',
      cta: 'Subscribe annually',
      badge: 'Save 2 months'
    }
  ]

  const handleUpgrade = (planId) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    if (user?.isPremium) {
      alert('You already have an active subscription!')
      return
    }

    navigate(`/checkout/${planId}`)
  }

  return (
    <div className="premium-page">
      <div className="premium-header">
        <h1>Choose Your Plan</h1>
        <p>Unlock exclusive features and premium content</p>
      </div>

      <div className="plans-container">
        {plans.map(plan => (
          <div key={plan.id} className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
            {plan.badge && <div className="plan-badge">{plan.badge}</div>}
            {plan.recommended && <div className="recommended-badge">RECOMMENDED</div>}
            
            <div className="plan-header">
              <h2 style={{ color: plan.color }}>{plan.name}</h2>
              {plan.price > 0 ? (
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="duration">/{plan.duration}</span>
                </div>
              ) : (
                <div className="plan-price free">Free</div>
              )}
              <p className="plan-description">{plan.description}</p>
            </div>

            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <button
              className={`plan-cta ${plan.id === 1 ? 'disabled' : ''}`}
              onClick={() => handleUpgrade(plan.id)}
              disabled={plan.id === 1 || (user?.subscription === plan.name.toLowerCase())}
            >
              {user?.subscription === plan.name.toLowerCase() ? '✓ Current Plan' : plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        
        <div className="faq-item">
          <h4>Can I cancel my subscription anytime?</h4>
          <p>Yes! You can cancel at any time. No lock-in period.</p>
        </div>

        <div className="faq-item">
          <h4>Is there a free trial?</h4>
          <p>Yes, we offer a 7-day free trial for new premium subscribers.</p>
        </div>

        <div className="faq-item">
          <h4>What payment methods do you accept?</h4>
          <p>We accept all major credit/debit cards, UPI, and digital wallets via Razorpay.</p>
        </div>

        <div className="faq-item">
          <h4>Can I upgrade or downgrade later?</h4>
          <p>Yes, you can change your plan anytime from your dashboard.</p>
        </div>
      </div>
    </div>
  )
}
