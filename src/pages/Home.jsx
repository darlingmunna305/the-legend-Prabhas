import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
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
            <a href="/filmography" className="btn btn-primary">Explore Filmography</a>
            <a href="/gallery" className="btn btn-secondary">3D Gallery</a>
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-card">
            <h3>30+</h3>
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
      </div>
    </div>
  )
}
