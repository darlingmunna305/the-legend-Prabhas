import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>PRABHAS</h1>
            <p className="tagline">The Legend</p>
          </Link>
        </div>
        
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/watch" className="nav-link watch-link">Watch All</Link>
          <Link to="/filmography" className="nav-link">Movies</Link>
          <Link to="/biography" className="nav-link">Biography</Link>
          <Link to="/gallery" className="nav-link">3D Gallery</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          <Link to="/premium" className="nav-link premium-link">Premium</Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link">
                {user.name}
              </Link>
              <button className="nav-link logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-link login-link">Login</Link>
          )}
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
