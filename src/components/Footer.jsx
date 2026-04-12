import React from 'react'
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
            <li><a href="https://www.imdb.com" target="_blank" rel="noopener noreferrer">IMDb</a></li>
            <li><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
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
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Prabhas Fan Website. All rights reserved. This is an unofficial fan site.</p>
      </div>
    </footer>
  )
}
