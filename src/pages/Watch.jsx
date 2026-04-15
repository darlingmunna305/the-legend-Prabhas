import React, { useState, useContext, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { movies } from '../data/prabhasData'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/watch.css'

export default function Watch() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [quality, setQuality] = useState('1080p')
  const { user, isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  // Video Player States
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  let controlsTimeout

  // Helper: check if movie has real HTML5 video URLs
  const hasHtml5Video = (movie) => {
    return movie.watchUrls && 
      Object.keys(movie.watchUrls).length > 0 && 
      Object.values(movie.watchUrls).some(url => url && url.length > 0)
  }

  // Helper: get YouTube embed URL for a movie (fullMovieUrl or trailerUrl)
  const getYoutubeUrl = (movie) => {
    return movie.fullMovieUrl || movie.trailerUrl || null
  }

  // Helper: determine if we should use YouTube embed
  const shouldUseYoutube = (movie) => {
    if (movie.videoSource === 'youtube') return true
    if (!hasHtml5Video(movie) && getYoutubeUrl(movie)) return true
    return false
  }

  const handleMovieSelect = (movie) => {
    if (movie.releaseStatus === 'Coming Soon') return
    setSelectedMovie(movie)
    setQuality('1080p')
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
  }

  const handleQualityChange = (q) => {
    if (q === '4k') {
      if (!isAuthenticated) {
        alert('Please login to access 4K quality')
        navigate('/login')
        return
      }
      if (user?.subscription !== 'elite') {
        if (window.confirm('4K Ultra HD is only available for Elite members. Upgrade now?')) {
          navigate('/premium')
        }
        return
      }
    }
    setQuality(q)
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration)
      }
    }
  }

  const handleSeek = (e) => {
    if (!videoRef.current) return
    const time = parseFloat(e.target.value)
    videoRef.current.currentTime = time
    setCurrentTime(time)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const toggleFullscreen = () => {
    if (!playerRef.current) return
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00'
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    clearTimeout(controlsTimeout)
    controlsTimeout = setTimeout(() => {
      if (isPlaying) setShowControls(false)
    }, 3000)
  }

  // Render the video player based on movie source
  const renderPlayer = () => {
    if (!selectedMovie) return null

    const useYoutube = shouldUseYoutube(selectedMovie)
    const youtubeUrl = getYoutubeUrl(selectedMovie)

    if (useYoutube && youtubeUrl) {
      return (
        <div className="youtube-wrapper">
          <iframe 
            width="100%" 
            height="100%" 
            src={`${youtubeUrl}?autoplay=1&modestbranding=1&rel=0`}
            title={`${selectedMovie.title} - Player`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    }

    if (hasHtml5Video(selectedMovie)) {
      return (
        <>
          <video 
            ref={videoRef}
            key={`${selectedMovie.id}-${quality}`}
            className="main-video"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => {
              if (videoRef.current) setDuration(videoRef.current.duration)
            }}
            onClick={togglePlay}
          >
            <source src={selectedMovie.watchUrls[quality] || selectedMovie.watchUrls['1080p'] || selectedMovie.watchUrls['720p']} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={`cinema-controls ${showControls ? 'visible' : ''}`} style={{ opacity: showControls ? 1 : 0 }}>
            <div className="seeker-wrap">
              <input 
                type="range" 
                min="0" 
                max={duration || 0} 
                step="0.1"
                value={currentTime} 
                onChange={handleSeek}
                className="seeker-bar"
              />
            </div>
            
            <div className="controls-row">
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <button className="btn-icon" onClick={togglePlay}>
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button className="btn-icon" onClick={toggleMute} style={{ width: '40px', height: '40px' }}>
                  {isMuted ? '🔇' : '🔊'}
                </button>
                <span className="time-display">{formatTime(currentTime)} / {formatTime(duration)}</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="quality-dropdown">
                  <select 
                    value={quality} 
                    onChange={(e) => handleQualityChange(e.target.value)}
                    className="filter-select"
                    style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                  >
                    <option value="720p">720p HD</option>
                    <option value="1080p">1080p FHD</option>
                    <option value="4k">4K UHD 💎</option>
                  </select>
                </div>
                <button className="btn-icon" onClick={toggleFullscreen}>
                  {isFullscreen ? '⤙⤚' : '⤢'}
                </button>
              </div>
            </div>
          </div>
        </>
      )
    }

    // No video source available at all
    return (
      <div className="no-video-message" style={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        height: '100%', minHeight: '400px', color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem'
      }}>
        <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎬</span>
        <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Video Unavailable</h3>
        <p>This movie's streaming content is not available yet.</p>
      </div>
    )
  }

  return (
    <div className="watch-page">
      <AnimatePresence mode="wait">
        {!selectedMovie ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="streaming-container"
          >
            <div className="watch-header">
              <h1 className="gold-text">PREMIUM STREAMING</h1>
              <p>Experience the cinematic saga of Prabhas in Ultra HD</p>
            </div>

            <div className="streaming-grid">
              {movies.map((movie) => (
                <motion.div 
                  key={movie.id} 
                  className={`streaming-card-premium ${movie.releaseStatus === 'Coming Soon' ? 'locked' : ''}`}
                  whileHover={{ scale: movie.releaseStatus === 'Coming Soon' ? 1 : 1.05 }}
                  onClick={() => handleMovieSelect(movie)}
                  style={{ cursor: movie.releaseStatus === 'Coming Soon' ? 'not-allowed' : 'pointer' }}
                >
                  <div className="poster-bg">
                    <img src={movie.image} alt={movie.title} onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(movie.title)} />
                  </div>
                  <div className="card-overlay-watch">
                    <span className="hero-tag" style={{ fontSize: '0.6rem', marginBottom: '0.5rem' }}>
                      {movie.year} • {movie.genre}
                    </span>
                    <h3>{movie.title}</h3>
                    <div className="meta-tag" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                      {movie.releaseStatus === 'Coming Soon' ? '🔒 Coming Soon' : '▶ Stream Now'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="player"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="player-section"
          >
            <div className="player-frame" ref={playerRef} onMouseMove={handleMouseMove}>
              {renderPlayer()}
            </div>

            <div className="playback-info">
              <div>
                <span className="hero-tag" style={{ fontSize: '0.8rem' }}>Currently Streaming</span>
                <h2 className="gold-text">{selectedMovie.title}</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>{selectedMovie.description}</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span className="meta-tag">{selectedMovie.year}</span>
                  <span className="meta-tag">{selectedMovie.genre}</span>
                  <span className="meta-tag">⭐ {selectedMovie.rating}</span>
                  {selectedMovie.director && <span className="meta-tag">🎬 {selectedMovie.director}</span>}
                </div>
              </div>
              <button className="exit-btn-alt" onClick={() => setSelectedMovie(null)}>
                ← Back to Library
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
