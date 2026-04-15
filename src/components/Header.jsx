import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AuthContext } from '../context/AuthContext'
import '../styles/header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    navigate('/')
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Watch All', path: '/watch', className: 'watch-link' },
    { name: 'Movies', path: '/filmography' },
    { name: 'Biography', path: '/biography' },
    { name: '3D Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Premium', path: '/premium', className: 'premium-link' },
  ]

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <h1>PRABHAS</h1>
            <p className="tagline">The Legend</p>
          </Link>
        </motion.div>
        
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, idx) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
            >
              <Link 
                to={item.path} 
                className={`nav-link ${item.className || ''} ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          {user ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
                {user.full_name || user.user_metadata?.full_name || user.email?.split('@')[0]}
              </Link>
              <button className="nav-link logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link to="/login" className="nav-link login-link" onClick={() => setMenuOpen(false)}>Login</Link>
            </motion.div>
          )}
        </nav>

        <motion.button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? '✕' : '☰'}
        </motion.button>
      </div>
    </motion.header>
  )
}
