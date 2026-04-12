import React from 'react'
import { biography } from '../data/prabhasData'
import '../styles/pages/biography.css'

export default function Biography() {
  return (
    <div className="biography">
      <div className="bio-header">
        <h1>{biography.name}</h1>
        <p className="tagline">"The Legend of Indian Cinema"</p>
      </div>

      <div className="bio-container">
        <div className="bio-sidebar">
          <div className="bio-card quick-info">
            <h3>Quick Info</h3>
            <div className="info-item">
              <span className="label">Date of Birth:</span>
              <span className="value">{biography.birthDate}</span>
            </div>
            <div className="info-item">
              <span className="label">Place of Birth:</span>
              <span className="value">{biography.birthPlace}</span>
            </div>
            <div className="info-item">
              <span className="label">Height:</span>
              <span className="value">{biography.height}</span>
            </div>
            <div className="info-item">
              <span className="label">Years Active:</span>
              <span className="value">{biography.yearsActive}</span>
            </div>
          </div>

          <div className="bio-card languages">
            <h3>Languages</h3>
            <div className="language-list">
              {biography.languages.map((lang, idx) => (
                <span key={idx} className="language-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bio-main">
          <div className="bio-section about">
            <h2>About</h2>
            <p>{biography.about}</p>
          </div>

          <div className="bio-section highlights">
            <h2>Career Highlights</h2>
            <ul className="highlight-list">
              {biography.careerHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="bio-section awards">
            <h2>Awards & Recognition</h2>
            <div className="awards-grid">
              {biography.awards.map((award, idx) => (
                <div key={idx} className="award-item">
                  <div className="award-year">{award.year}</div>
                  <div className="award-name">{award.award}</div>
                  {award.category && <div className="award-category">{award.category}</div>}
                  {award.film && <div className="award-film">{award.film}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bio-section personal">
            <h2>Personal Life</h2>
            <div className="personal-info">
              <h4>Hobbies & Interests</h4>
              <p>{biography.personalLife.hobbies.join(', ')}</p>
              
              <h4>Philanthropy</h4>
              <p>Interests in: {biography.personalLife.philanthropyInterests.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
