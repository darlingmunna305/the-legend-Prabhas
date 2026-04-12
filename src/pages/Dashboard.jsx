import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/pages/dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useContext(AuthContext)

  if (!isAuthenticated) {
    navigate('/login')
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleUpgrade = () => {
    navigate('/premium')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Welcome, {user?.name}! 👋</h1>
          <p className="subtitle">Manage your account and subscription</p>
        </div>

        <div className="dashboard-grid">
          {/* Account Info Section */}
          <div className="dashboard-card">
            <h2>Account Information</h2>
            <div className="info-group">
              <label>Full Name</label>
              <p>{user?.name}</p>
            </div>
            <div className="info-group">
              <label>Email</label>
              <p>{user?.email}</p>
            </div>
            <div className="info-group">
              <label>Member Since</label>
              <p>{formatDate(user?.joinDate)}</p>
            </div>
            <button className="btn-secondary">Edit Profile</button>
          </div>

          {/* Subscription Status Section */}
          <div className="dashboard-card">
            <h2>Subscription Status</h2>
            <div className="subscription-badge">
              <span className={`status-indicator ${user?.isPremium ? 'premium' : 'free'}`}></span>
              <span className="status-text">
                {user?.isPremium ? 'PREMIUM' : 'FREE'}
              </span>
            </div>

            {user?.isPremium ? (
              <>
                <div className="info-group">
                  <label>Plan Type</label>
                  <p className="plan-type">{user?.subscription}</p>
                </div>
                <div className="info-group">
                  <label>Expires On</label>
                  <p>{formatDate(user?.expiryDate)}</p>
                </div>
                <div className="info-group">
                  <label>Status</label>
                  <p className="status-active">✓ Active</p>
                </div>
                <button className="btn-secondary">Manage Subscription</button>
              </>
            ) : (
              <>
                <p className="free-text">Upgrade to Premium to unlock exclusive features!</p>
                <div className="features-preview">
                  <h4>Premium Benefits:</h4>
                  <ul>
                    <li>✓ Ad-free experience</li>
                    <li>✓ Exclusive behind-the-scenes content</li>
                    <li>✓ Premium quality downloads</li>
                    <li>✓ VIP community access</li>
                  </ul>
                </div>
                <button className="btn-primary" onClick={handleUpgrade}>
                  Upgrade to Premium
                </button>
              </>
            )}
          </div>

          {/* Usage Stats Section */}
          <div className="dashboard-card full-width">
            <h2>Your Activity</h2>
            <div className="activity-grid">
              <div className="activity-item">
                <span className="activity-icon">⭐</span>
                <div>
                  <p className="activity-value">15</p>
                  <p className="activity-label">Reviews Written</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🎬</span>
                <div>
                  <p className="activity-value">24</p>
                  <p className="activity-label">Movies Watched</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">❤️</span>
                <div>
                  <p className="activity-value">8</p>
                  <p className="activity-label">Favorites</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">💬</span>
                <div>
                  <p className="activity-value">42</p>
                  <p className="activity-label">Community Posts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="dashboard-card full-width">
            <h2>Quick Actions</h2>
            <div className="quick-actions">
              <button className="action-btn">
                <span>📚</span>
                <p>Continue Watching</p>
              </button>
              <button className="action-btn">
                <span>⭐</span>
                <p>My Reviews</p>
              </button>
              <button className="action-btn">
                <span>❤️</span>
                <p>My Favorites</p>
              </button>
              <button className="action-btn">
                <span>📧</span>
                <p>Notifications</p>
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-footer">
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
