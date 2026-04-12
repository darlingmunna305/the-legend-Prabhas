import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { movies } from '../data/prabhasData'
import '../styles/pages/gallery.css'

export default function Gallery() {
  const canvasRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sceneRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth - 300, 500)
    renderer.setClearColor(0x000000, 0.1)
    canvasRef.current.appendChild(renderer.domElement)

    camera.position.z = 3

    // Create planes for carousel
    const planes = []
    const textureLoader = new THREE.TextureLoader()

    movies.slice(0, 5).forEach((movie, idx) => {
      const geometry = new THREE.PlaneGeometry(2, 3)
      const canvas = document.createElement('canvas')
      canvas.width = 300
      canvas.height = 450
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#d4af37'
      ctx.font = 'bold 24px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(movie.title, canvas.width / 2, canvas.height / 2)
      
      const texture = new THREE.CanvasTexture(canvas)
      const material = new THREE.MeshPhongMaterial({ map: texture })
      const plane = new THREE.Mesh(geometry, material)
      plane.position.x = (idx - 2) * 2.5
      plane.position.z = idx === currentIndex ? 0 : -1
      scene.add(plane)
      planes.push(plane)
    })

    // Lighting
    const light = new THREE.PointLight(0xffffff, 100)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    // Animation loop
    let targetRotation = 0
    const animate = () => {
      requestAnimationFrame(animate)
      
      planes.forEach((plane, idx) => {
        const targetX = (idx - currentIndex) * 2.5
        plane.position.x += (targetX - plane.position.x) * 0.1
        plane.rotation.y += 0.002
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth - 300, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (canvasRef.current && renderer.domElement.parentNode === canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement)
      }
    }
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
            <span><strong>Genre:</strong></span>
            <span>{currentMovie.genre}</span>
          </div>
          
          <div className="info-row">
            <span><strong>Director:</strong></span>
            <span>{currentMovie.director}</span>
          </div>

          <div className="info-row">
            <span><strong>Rating:</strong></span>
            <span>⭐ {currentMovie.rating}/10</span>
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
