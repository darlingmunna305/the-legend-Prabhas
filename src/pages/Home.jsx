import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import { movies } from '../data/prabhasData'
import '../styles/pages/home.css'

export default function Home() {
  const canvasRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvasRef.current.appendChild(renderer.domElement)

    camera.position.z = 2

    // Particle Galaxy
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 6
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    
    const material = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const particlesMesh = new THREE.Points(particlesGeometry, material)
    scene.add(particlesMesh)

    // Mouse movement interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.y += 0.001
      
      const targetX = (mouseX - window.innerWidth / 2) * 0.0001
      const targetY = (mouseY - window.innerHeight / 2) * 0.0001
      
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x)
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y)
      
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      canvasRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
  }

  return (
    <div className="home">
      <div className="canvas-container" ref={canvasRef}></div>
      
      <div className="home-content">
        <motion.section 
          className="hero-section"
          style={{ y: y1, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-tag" variants={itemVariants}>
            Established 2002
          </motion.span>
          <motion.h1 variants={itemVariants}>
            THE LEGEND
          </motion.h1>
          <motion.h2 variants={itemVariants}>
            PRABHAS
          </motion.h2>
          <motion.p className="hero-description" variants={itemVariants}>
            Experience the journey of Indian Cinema's most iconic superstar. From Rebel to Global Icon.
          </motion.p>
          
          <motion.div className="cta-group" variants={itemVariants}>
            <Link to="/watch" className="btn-premium btn-gold">
              Stream Now
            </Link>
            <Link to="/filmography" className="btn-premium btn-outline">
              Explore Films
            </Link>
          </motion.div>

          <motion.div className="highlights-grid" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-value">{movies.length}+</span>
              <span className="stat-label">Blockbusters</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2B+</span>
              <span className="stat-label">Global Fans</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Pan-India</span>
              <span className="stat-label">Superstar</span>
            </div>
          </motion.div>
        </motion.section>

        <section className="featured-movies-section">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="shimmer-text">Featured Works</h2>
            <Link to="/filmography" className="btn-premium btn-outline" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
              View Archive
            </Link>
          </motion.div>
          
          <div className="movies-grid">
            {movies.filter(m => m.featured).map((movie, idx) => (
              <motion.div 
                key={movie.id} 
                className="movie-card-premium"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="movie-poster-wrapper">
                  <img src={movie.image} alt={movie.title} onError={(e) => e.target.src = 'https://via.placeholder.com/600x900?text=' + movie.title} />
                </div>
                <div className="movie-card-overlay">
                  <div className="movie-meta">
                    <span className="meta-tag">⭐ {movie.rating}</span>
                    <span className="meta-tag">{movie.year}</span>
                  </div>
                  <h3 className="movie-title-premium">{movie.title}</h3>
                  <p className="movie-details">{movie.genre} • {movie.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
