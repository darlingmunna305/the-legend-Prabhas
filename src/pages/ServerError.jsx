import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/error.css'

export default function ServerError() {
  const navigate = useNavigate()

  return (
    <div className="error-page server-error">
      <div className="error-container">
        <div className="error-content">
          <div className="error-code">500</div>
          <h1>Server Error</h1>
          <p className="error-message">
            Oops! Something went wrong on our end. We're working to fix it!
          </p>
          
          <div className="error-suggestions">
            <p>Please try:</p>
            <div className="suggestion-links">
              <button className="btn-cool-liquid" onClick={() => window.location.reload()}>
                Refresh Page
              </button>
              <button className="btn-cool-liquid" onClick={() => navigate('/')}>
                Return to Home
              </button>
              <button className="btn-cool-liquid" onClick={() => navigate(-1)}>
                Go Back
              </button>
            </div>
          </div>

          <div className="error-contact">
            <p>If the problem persists, please contact us:</p>
            <p>Email: support@thelegendprabhas.com</p>
          </div>

          <div className="error-illustration">
            <div className="illustration-text">⚙️</div>
          </div>
        </div>
      </div>
    </div>
  )
}
