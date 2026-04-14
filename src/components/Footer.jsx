import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>A fan website dedicated to actor Prabhas, showcasing his filmography and career.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/filmography">Filmography</Link></li>
            <li><Link to="/biography">Biography</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal Streaming</h3>
          <ul>
            <li><a href="https://www.primevideo.com" target="_blank" rel="noopener noreferrer">Amazon Prime Video</a></li>
            <li><a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">Netflix</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><a href="mailto:support@thelegendprabhas.com">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Prabhas Fan Website. All rights reserved. This is an unofficial fan site.</p>
      </div>
    </footer>
  )
}
