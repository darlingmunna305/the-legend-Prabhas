import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/pages/premium.css'

export default function Premium() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useContext(AuthContext)

  const plans = [
    {
      id: 1,
      name: 'Commoner',
      price: 0,
      duration: 'Forever',
      description: 'Basic access to the legend',
      features: [
        'Browse movies & trailers',
        'Read actor biography',
        'View news & updates',
        'Basic movie stats'
      ],
      color: '#999999',
      cta: 'Current Plan'
    },
    {
      id: 2,
      name: 'Loyal Fan',
      price: 199,
      duration: 'Month',
      description: 'Enhanced cinematic experience',
      features: [
        'Everything in Commoner',
        'Ad-free browsing',
        'Exclusive behind-the-scenes',
        'Early news access',
        'Premium fan badge'
      ],
      color: 'var(--primary-gold)',
      cta: 'Upgrade to Fan',
      recommended: true
    },
    {
      id: 3,
      name: 'Imperial Elite',
      price: 999,
      duration: 'Month',
      description: 'The ultimate royal treatment',
      features: [
        'Everything in Loyal Fan',
        '4K Ultra HD Streaming 💎',
        'Priority feature requests',
        'Exclusive 8K digital posters',
        'Direct support chat'
      ],
      color: '#ffffff',
      cta: 'Become Elite',
      recommended: false,
      badge: 'Best Experience'
    }
  ]

  const handleUpgrade = (planId) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    navigate(`/checkout/${planId}`)
  }

  return (
    <div className="premium-page">
      <motion.div 
        className="premium-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="gold-text">ASCEND TO LEGACY</h1>
        <p>Unlock the full power of the Prabhas Fan Universe</p>
      </motion.div>

      <div className="plans-container">
        {plans.map((plan, idx) => (
          <motion.div 
            key={plan.id} 
            className={`plan-card-premium ${plan.recommended ? 'recommended' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {plan.badge && <div className="plan-badge-gold">{plan.badge}</div>}
            
            <div className="plan-header">
              <h2 style={{ color: plan.color }}>{plan.name}</h2>
              <div className="plan-price">
                <span className="amount">₹{plan.price}</span>
                <span className="duration">/{plan.duration}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>

            <ul className="plan-features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}><span>✓</span> {feature}</li>
              ))}
            </ul>

            <button
              className="plan-cta-premium"
              onClick={() => handleUpgrade(plan.id)}
              disabled={plan.id === 1}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="faq-section-premium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="gold-text">Common Inquiries</h3>
        <div className="faq-grid">
          <div className="faq-item-premium">
            <h4>Can I cancel anytime?</h4>
            <p>Absolutely. You are in control of your legacy.</p>
          </div>
          <div className="faq-item-premium">
            <h4>What is 4K Streaming?</h4>
            <p>Imperial Elite members get access to ultra-high-definition content where available.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
