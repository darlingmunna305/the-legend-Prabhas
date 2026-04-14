import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

    const scene = new THREE.Scene()
    sceneRef.current = scene
    const aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
    cameraRef.current = camera
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    rendererRef.current = renderer
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    canvasRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    const textureLoader = new THREE.TextureLoader()
    const planes = []

    movies.forEach((movie, idx) => {
      const geometry = new THREE.PlaneGeometry(3, 4.5)
      const texture = textureLoader.load(movie.image)
      const material = new THREE.MeshPhongMaterial({ 
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        shininess: 50
      })
      
      const plane = new THREE.Mesh(geometry, material)
      const angle = (idx / movies.length) * Math.PI * 2
      const radius = 8
      plane.position.x = Math.sin(angle) * radius
      plane.position.z = Math.cos(angle) * radius
      plane.lookAt(0, 0, 0)
      
      scene.add(plane)
      planes.push(plane)
    })
    planesRef.current = planes

    const light1 = new THREE.PointLight(0xffffff, 100)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    if (!cameraRef.current || !planesRef.current.length) return

    const targetAngle = (currentIndex / movies.length) * Math.PI * 2
    const radius = 8
    const targetCamX = Math.sin(targetAngle) * (radius + 2)
    const targetCamZ = Math.cos(targetAngle) * (radius + 2)

    // Move camera to current selection
    cameraRef.current.position.set(targetCamX, 0, targetCamZ)
    cameraRef.current.lookAt(0, 0, 0)

    planesRef.current.forEach((plane, idx) => {
      plane.scale.set(idx === currentIndex ? 1.2 : 1, idx === currentIndex ? 1.2 : 1, 1)
    })
  }, [currentIndex])

  const currentMovie = movies[currentIndex]

  return (
    <div className="gallery">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        LIVING LEGACY
      </motion.h1>
      
      <div className="gallery-container">
        <motion.div 
          className="canvas-wrapper" 
          ref={canvasRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Three.js Canvas Injection */}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="gallery-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <span className="year">{currentMovie.year}</span>
            <h2>{currentMovie.title}</h2>
            <p className="description">{currentMovie.description}</p>
            
            <div className="gallery-financial-stats">
              <div className="stat-box">
                <span className="stat-label">Budget</span>
                <span className="stat-value">{currentMovie.budget}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Collection</span>
                <span className="stat-value">{currentMovie.collection}</span>
              </div>
            </div>

            <div className="carousel-controls">
              <button 
                onClick={() => setCurrentIndex(prev => (prev - 1 + movies.length) % movies.length)} 
                className="control-btn-premium"
              >
                Previous
              </button>
              <span className="counter-text">{currentIndex + 1} / {movies.length}</span>
              <button 
                onClick={() => setCurrentIndex(prev => (prev + 1) % movies.length)} 
                className="control-btn-premium"
              >
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
