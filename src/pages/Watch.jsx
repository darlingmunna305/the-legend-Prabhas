import React, { useState, useContext, useEffect, useRef } from 'react'
import { movies } from '../data/prabhasData'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
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
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  let controlsTimeout

  const handleMovieSelect = (movie) => {
    if (movie.releaseStatus === 'Coming Soon') return
    setSelectedMovie(movie)
    setQuality('1080p')
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const handleQualityChange = (q) => {
    if (q === '4k') {
      if (!isAuthenticated) {
        alert('Please login to access 4K quality')
        navigate('/login')
        return
      }
      if (user?.subscription !== 'elite') {
        if (window.confirm('4K Ultra HD is only available for Elite members (₹1000/month). Upgrade now?')) {
          navigate('/premium')
        }
        return
      }
    }
    setQuality(q)
  }

  // Video Logic
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleDurationChange = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      // Fallback if duration was missed during load
      if (!duration && videoRef.current.duration) {
        setDuration(videoRef.current.duration)
      }
    }
  }

  const handleSeek = (e) => {
    const time = e.target.value
    videoRef.current.currentTime = time
    setCurrentTime(time)
  }

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const handleVolumeChange = (e) => {
    const v = e.target.value
    videoRef.current.volume = v
    setVolume(v)
    setIsMuted(v === 0)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const formatTime = (time) => {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMovie) return
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      } else if (e.code === 'KeyF') {
        toggleFullscreen()
      } else if (e.code === 'KeyM') {
        toggleMute()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMovie, isPlaying])

  return (
    <div className="watch-page">
      <div className="watch-header">
        <h1>Prabhas Streaming Hub</h1>
        <p>Watch all the latest and classic Prabhas movies in high quality</p>
      </div>

      {selectedMovie ? (
        <div className="player-section">
          <div 
            className={`player-container ${showControls ? 'show-controls' : 'hide-controls'}`}
            ref={playerRef}
            onMouseMove={handleMouseMove}
          >
            <div className="video-wrapper" onClick={togglePlay}>
              <video 
                ref={videoRef}
                key={`${selectedMovie.id}-${quality}`}
                className="main-video"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onDurationChange={handleDurationChange}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={selectedMovie.watchUrls?.[quality] || selectedMovie.watchUrls?.['720p']} type="video/mp4" />
              </video>
              
            </div>

            {/* Custom Controls */}
            <div className="custom-controls">
              <div className="progress-area">
                <input 
                  type="range" 
                  min="0" 
                  max={duration || 0} 
                  value={currentTime} 
                  onChange={handleSeek}
                  className="progress-bar"
                />
              </div>
              
              <div className="controls-main">
                <div className="left-controls">
                  <button className="ctrl-btn play-pause" onClick={togglePlay}>
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                  <div className="volume-group">
                    <button className="ctrl-btn mute-toggle" onClick={toggleMute}>
                      {isMuted || volume === 0 ? '🔇' : '🔊'}
                    </button>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.1" 
                      value={volume} 
                      onChange={handleVolumeChange} 
                      className="volume-slider"
                    />
                  </div>
                  <div className="time-display">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="right-controls">
                  <div className="quality-dropdown">
                    <button className="q-select-btn">{quality.toUpperCase()}</button>
                    <div className="q-menu">
                      {['720p', '1080p', '4k'].map(q => (
                        <button key={q} onClick={() => handleQualityChange(q)} className={quality === q ? 'active' : ''}>
                          {q.toUpperCase()} {q === '4k' ? '💎' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="ctrl-btn fullscreen" onClick={toggleFullscreen}>
                    {isFullscreen ? '⤙⤚' : '⤢'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="playing-context">
            <div className="movie-meta">
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.year} • {selectedMovie.genre} • {selectedMovie.description}</p>
            </div>
            <button className="exit-btn" onClick={() => setSelectedMovie(null)}>Exit Player</button>
          </div>
        </div>
      ) : (
        <div className="movies-streaming-list">
          <div className="filters-bar">
            <h2>Select a Movie to Stream</h2>
          </div>
          <div className="streaming-grid">
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className={`streaming-card ${movie.releaseStatus === 'Coming Soon' ? 'locked' : ''}`}
                onClick={() => handleMovieSelect(movie)}
              >
                <div className="poster-wrapper">
                  <img src={movie.image} alt={movie.title} onError={(e) => e.target.src = 'https://via.placeholder.com/200x300?text=' + movie.title} />
                  {movie.releaseStatus === 'Coming Soon' ? (
                    <div className="status-overlay coming-soon">
                      <span>COMING SOON</span>
                      <small>Available 1 week after release</small>
                    </div>
                  ) : (
                    <div className="status-overlay watch-now">
                      <span>WATCH NOW</span>
                    </div>
                  )}
                </div>
                <div className="card-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
