import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { movies } from '../data/prabhasData'
import '../styles/pages/gallery.css'

export default function Gallery() {
  const canvasRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sceneRef = useRef(null)

  const planesRef = useRef([])
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    const aspect = (canvasRef.current.clientWidth || window.innerWidth - 450) / 500
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
    cameraRef.current = camera
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    rendererRef.current = renderer
    
    const wrapperWidth = canvasRef.current.clientWidth || window.innerWidth - 450
    const wrapperHeight = 500
    renderer.setSize(wrapperWidth, wrapperHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    canvasRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create planes for carousel
    const planes = []
    const textureLoader = new THREE.TextureLoader()

    movies.forEach((movie, idx) => {
      const geometry = new THREE.PlaneGeometry(2.5, 3.8)
      
      // Load actual movie poster
      const texture = textureLoader.load(movie.image, (tex) => {
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy()
      })
      
      const material = new THREE.MeshPhongMaterial({ 
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        shininess: 100
      })
      
      const plane = new THREE.Mesh(geometry, material)
      
      // Position in a curved carousel
      const angle = (idx / movies.length) * Math.PI * 2
      const radius = 6
      plane.position.x = Math.sin(angle) * radius
      plane.position.z = Math.cos(angle) * radius
      plane.lookAt(0, 0, 0)
      
      scene.add(plane)
      planes.push(plane)
    })
    planesRef.current = planes

    // Lighting
    const light1 = new THREE.PointLight(0xffffff, 80)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const light2 = new THREE.PointLight(0xd4af37, 50)
    light2.position.set(-5, -5, 5)
    scene.add(light2)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    // Animation loop
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return
      const width = canvasRef.current.clientWidth
      const height = 500
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (canvasRef.current && renderer.domElement.parentNode === canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement)
      }
      // Dispose resources
      planes.forEach(p => {
        p.geometry.dispose()
        p.material.dispose()
        if (p.material.map) p.material.map.dispose()
      })
      renderer.dispose()
    }
  }, []) // Initialize once

  // Handle camera and plane state separately
  useEffect(() => {
    if (!cameraRef.current || !planesRef.current.length) return

    const targetAngle = (currentIndex / movies.length) * Math.PI * 2
    const radius = 6
    const targetCamX = Math.sin(targetAngle) * (radius + 4)
    const targetCamZ = Math.cos(targetAngle) * (radius + 4)

    // We can't use an imperative loop easily here for smooth lerp without a frame loop,
    // so we keep the animation loop simple in the main effect and just update values here.
    // However, for pure React style, we just set final positions or use a small timer.
    // For now, simpler: just update current state.
    
    cameraRef.current.position.set(targetCamX, 0, targetCamZ)
    cameraRef.current.lookAt(0, 0, 0)

    planesRef.current.forEach((plane, idx) => {
      if (idx === currentIndex) {
        plane.scale.set(1.1, 1.1, 1.1)
      } else {
        plane.scale.set(1, 1, 1)
      }
    })
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length)
  }

  const currentMovie = movies[currentIndex]

  return (
    <div className="gallery">
      <h1>3D Interactive Gallery</h1>
      
      <div className="gallery-container">
        <div className="canvas-wrapper" ref={canvasRef}></div>

        <div className="gallery-info">
          <h2>{currentMovie.title}</h2>
          <p className="year">{currentMovie.year}</p>
          <p className="description">{currentMovie.description}</p>
          
          <div className="info-row">
            <span><strong>Status:</strong></span>
            <span className={`status-text status-${currentMovie.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {currentMovie.status}
            </span>
          </div>

          <div className="gallery-financial-stats">
            <div className="stat-box">
              <span className="stat-label">Production Budget</span>
              <span className="stat-value">{currentMovie.budget}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Worldwide Gross</span>
              <span className="stat-value">{currentMovie.collection}</span>
            </div>
          </div>

          <div className="carousel-controls">
            <button onClick={handlePrev} className="control-btn">← Previous</button>
            <span className="counter">{currentIndex + 1} / {movies.length}</span>
            <button onClick={handleNext} className="control-btn">Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
