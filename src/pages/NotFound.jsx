import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/error.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="error-page not-found">
      <div className="error-container">
        <div className="error-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p className="error-message">
            Sorry! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="error-suggestions">
            <p>Here are some helpful links instead:</p>
            <div className="suggestion-links">
              <button className="btn-3d-liquid" onClick={() => navigate('/')}>
                Go to Home
              </button>
              <button className="btn-3d-liquid" onClick={() => navigate('/filmography')}>
                View Filmography
              </button>
              <button className="btn-3d-liquid" onClick={() => navigate('/gallery')}>
                3D Gallery
              </button>
            </div>
          </div>

          <div className="error-illustration">
            <div className="illustration-text">🎬</div>
          </div>
        </div>
      </div>
    </div>
  )
}
