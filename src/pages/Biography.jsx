import React from 'react'
import { motion } from 'framer-motion'
import { biography } from '../data/prabhasData'
import '../styles/pages/biography.css'

export default function Biography() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
  }

  return (
    <motion.div 
      className="biography"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bio-header">
        <motion.h1 variants={itemVariants}>{biography?.name || 'Prabhas'}</motion.h1>
        <motion.p className="tagline" variants={itemVariants}>
          The Legend of Indian Cinema
        </motion.p>
      </div>

      <div className="bio-container">
        <motion.div className="bio-sidebar" variants={itemVariants}>
          <div className="bio-card-premium">
            <h3 className="gold-text">Pulse</h3>
            <div className="info-item">
              <span className="info-label">Born</span>
              <span className="info-value">{biography?.birthDate}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Origin</span>
              <span className="info-value">{biography?.birthPlace}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Height</span>
              <span className="info-value">{biography?.height}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Legacy</span>
              <span className="info-value">{biography?.yearsActive} Years</span>
            </div>
            
            <div className="info-item" style={{ marginTop: '2rem' }}>
              <span className="info-label">Languages</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {biography?.languages?.map(lang => (
                  <span key={lang} className="meta-tag" style={{ fontSize: '0.7rem' }}>{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bio-main">
          <motion.section className="bio-section-premium" variants={itemVariants}>
            <h2 className="shimmer-text">The Journey</h2>
            <p>{biography?.about}</p>
          </motion.section>

          <motion.section className="bio-section-premium" variants={itemVariants}>
            <h2>Career Milestones</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {biography?.careerHighlights?.map((highlight, idx) => (
                <div key={idx} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--primary-gold)' }}>
                  <p style={{ margin: 0 }}>{highlight}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section className="bio-section-premium" variants={itemVariants}>
            <h2>Hall of Fame</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {biography?.awards?.map((award, idx) => (
                <div key={idx} className="award-card-premium">
                  <span className="award-year-gold">{award.year}</span>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{award.award}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{award.category}</span>
                  <span className="hero-tag" style={{ fontSize: '0.6rem', marginTop: '0.5rem' }}>{award.film}</span>
                </div>
              ))}
            </div>
          </motion.section>
          
          <motion.section className="bio-section-premium" variants={itemVariants}>
            <h2>Beyond The Screen</h2>
            <div className="info-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <span className="info-label">Interests</span>
                <p>{biography?.personalLife?.hobbies?.join(' • ')}</p>
              </div>
              <div>
                <span className="info-label">Global Impact</span>
                <p>Support in: {biography?.personalLife?.philanthropyInterests?.join(', ')}</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  )
}
