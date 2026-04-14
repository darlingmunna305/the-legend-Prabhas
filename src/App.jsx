import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Filmography from './pages/Filmography'
import Biography from './pages/Biography'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Reviews from './pages/Reviews'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Premium from './pages/Premium'
import Dashboard from './pages/Dashboard'
import Checkout from './pages/Checkout'
import Watch from './pages/Watch'
import { AuthProvider } from './context/AuthContext'
import './App.css'
import './styles/pages/auth.css'
import './styles/pages/premium.css'
import './styles/pages/dashboard.css'
import './styles/pages/checkout.css'
import './styles/pages/watch.css'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/filmography" element={<Filmography />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/checkout/:planId" element={<Checkout />} />
              <Route path="/watch" element={<Watch />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}
