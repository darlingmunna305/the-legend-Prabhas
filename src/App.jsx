import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics, { trackPageView } from './components/GoogleAnalytics'
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
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import ServerError from './pages/ServerError'
import { AuthProvider } from './context/AuthContext'
import './App.css'
import './styles/pages/auth.css'
import './styles/pages/premium.css'
import './styles/pages/dashboard.css'
import './styles/pages/checkout.css'
import './styles/pages/watch.css'
import './styles/pages/legal.css'
import './styles/pages/error.css'

// SEO Metadata Component
function SEOHead() {
  useEffect(() => {
    // Update meta tags for current page
    const updateMetaTags = () => {
      const location = window.location.pathname
      
      let title = 'The Legend Prabhas - Fan Website'
      let description = 'Explore Prabhas filmography, biography, news, reviews, and premium content on The Legend Prabhas - the ultimate fan destination.'
      let image = 'https://thelegendprabhas.com/og-image.png'

      switch (location) {
        case '/filmography':
          title = 'Filmography - The Legend Prabhas'
          description = 'Browse Prabhas complete filmography with movie details, ratings, and streaming links.'
          break
        case '/biography':
          title = 'Biography - The Legend Prabhas'
          description = 'Learn about Prabhas career, awards, achievements, and personal details.'
          break
        case '/gallery':
          title = '3D Gallery - The Legend Prabhas'
          description = 'Experience interactive 3D gallery of Prabhas movie posters and promotional images.'
          break
        case '/news':
          title = 'Latest News - The Legend Prabhas'
          description = 'Stay updated with latest news, updates, and announcements about Prabhas.'
          break
        case '/reviews':
          title = 'Reviews - The Legend Prabhas'
          description = 'Read and submit reviews for Prabhas movies. Join our fan community.'
          break
        case '/premium':
          title = 'Premium Plans - The Legend Prabhas'
          description = 'Get exclusive access to premium content with our subscription plans.'
          break
        case '/terms':
          title = 'Terms & Conditions - The Legend Prabhas'
          description = 'Read our terms and conditions for using The Legend Prabhas website.'
          break
        case '/privacy':
          title = 'Privacy Policy - The Legend Prabhas'
          description = 'Learn how we protect your privacy and handle your data.'
          break
      }

      // Update title
      document.title = title

      // Update meta tags
      updateMetaTag('description', description)
      updateMetaTag('og:title', title)
      updateMetaTag('og:description', description)
      updateMetaTag('og:image', image)
      updateMetaTag('og:type', 'website')
      updateMetaTag('og:url', window.location.href)
      updateMetaTag('twitter:card', 'summary_large_image')
      updateMetaTag('twitter:title', title)
      updateMetaTag('twitter:description', description)
      updateMetaTag('twitter:image', image)
    }

    updateMetaTags()
  }, [])

  return null
}

function updateMetaTag(name, content) {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name)
    } else {
      element.setAttribute('name', name)
    }
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

// Page tracking component
function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname, document.title)
  }, [location])

  return null
}

// Main App Component
function AppContent() {
  return (
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual Google Analytics ID

  return (
    <Router>
      <AuthProvider>
        <GoogleAnalytics trackingId={GA_TRACKING_ID} />
        <SEOHead />
        <PageTracker />
        <AppContent />
      </AuthProvider>
    </Router>
  )
}
