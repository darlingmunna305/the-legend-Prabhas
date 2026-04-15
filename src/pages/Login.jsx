import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/pages/auth.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login, isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    const response = await login(email, password)
    if (response.success) {
      navigate('/dashboard')
    } else {
      setError(response.error || 'Invalid credentials. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="auth-container">
      <motion.div 
        className="auth-card-premium"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h1>Welcome Back</h1>
        <span className="auth-subtitle">Login to your exclusive fan portal</span>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="error-message"
            style={{ marginBottom: '2rem' }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group-premium">
            <label className="form-label-premium">Identity</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="form-input-premium"
              required
            />
          </div>

          <div className="form-group-premium">
            <label className="form-label-premium">Access Key</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input-premium"
              required
            />
          </div>

          <button type="submit" className="auth-btn-premium" disabled={loading}>
            {loading ? 'Authenticating...' : 'Enter Portal'}
          </button>
        </form>

        <div className="auth-footer-premium">
          <p>New to the legend? <Link to="/signup">Create account</Link></p>
        </div>
      </motion.div>
    </div>
  )
}
