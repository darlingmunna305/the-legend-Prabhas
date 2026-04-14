import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import { movies } from '../data/prabhasData'
import '../styles/pages/home.css'

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x0a0a0a)
    canvasRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create rotating cube
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshPhongMaterial({ color: 0xd4af37 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Lighting
    const light = new THREE.PointLight(0xffffff, 100)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.005
      cube.rotation.y += 0.005
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvasRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="home">
      <div className="canvas-container" ref={canvasRef}></div>
      
      <div className="home-content">
        <div className="hero-section">
          <h1>The Legend</h1>
          <h2>PRABHAS</h2>
          <p>One of Indian Cinema's Biggest Superstars</p>
          <div className="cta-buttons">
            <Link to="/watch" className="btn btn-watch-all">WATCH ALL MOVIES</Link>
            <Link to="/filmography" className="btn btn-primary">EXPLORE FILMOGRAPHY</Link>
            <Link to="/gallery" className="btn btn-primary">3D GALLERY</Link>
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-card">
            <h3>{movies.length}+</h3>
            <p>Films</p>
          </div>
          <div className="highlight-card">
            <h3>2 Billion+</h3>
            <p>Global Fans</p>
          </div>
          <div className="highlight-card">
            <h3>15+</h3>
            <p>Awards</p>
          </div>
        </div>

        <section className="featured-movies-section">
          <div className="section-header">
            <h2>Featured Blockbusters</h2>
            <Link to="/filmography" className="view-all-link">View All Movies →</Link>
          </div>
          
          <div className="movies-scroll-container">
            {movies.filter(m => m.featured).map(movie => (
              <div key={movie.id} className="featured-movie-card">
                <div className="card-image-wrapper">
                  <img src={movie.image} alt={movie.title} onError={(e) => e.target.src = 'https://via.placeholder.com/300x450?text=' + movie.title} />
                  <div className="card-overlay">
                    <div className="rating-tag">⭐ {movie.rating}</div>
                    <div className="status-tag">{movie.status}</div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{movie.title}</h3>
                  <p>{movie.year} • {movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
