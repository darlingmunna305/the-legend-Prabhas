import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { movies } from '../data/prabhasData'
import '../styles/pages/filmography.css'

export default function Filmography() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [sortBy, setSortBy] = useState('year-desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterGenre, setFilterGenre] = useState('all')
  const [filterYear, setFilterYear] = useState('all')
  const [displayedMovies, setDisplayedMovies] = useState(movies)

  const genres = useMemo(() => ['all', ...new Set((movies || []).map(m => m?.genre).filter(Boolean))], [])
  const years = useMemo(() => ['all', ...new Set((movies || []).map(m => m?.year).filter(Boolean))].sort((a, b) => b - a), [])

  useEffect(() => {
    let filtered = [...movies]

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        movie =>
          (movie?.title?.toLowerCase() || '').includes(searchLower) ||
          (movie?.description?.toLowerCase() || '').includes(searchLower) ||
          (movie?.cast?.some(actor => actor?.toLowerCase()?.includes(searchLower)) || false)
      )
    }

    if (filterGenre !== 'all') {
      filtered = filtered.filter(movie => movie.genre === filterGenre)
    }

    if (filterYear !== 'all') {
      filtered = filtered.filter(movie => movie.year === parseInt(filterYear))
    }

    filtered.sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year
      if (sortBy === 'year-asc') return a.year - b.year
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

    setDisplayedMovies(filtered)
  }, [searchTerm, sortBy, filterGenre, filterYear])

  return (
    <div className="filmography">
      <motion.div 
        className="filmography-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gold-text">Cinematic Archive</h1>
        <p>Explore the legendary collection of Pan-India's biggest superstar</p>
      </motion.div>

      <motion.div 
        className="filmography-controls"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Explore by title, character or cast..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-group">
          <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)} className="filter-select">
            <option value="all">All Genres</option>
            {genres.filter(g => g !== 'all').map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>

          <select value={filterYear} onChange={(e) => setFilterYear(e.target.value)} className="filter-select">
            <option value="all">All Years</option>
            {years.filter(y => y !== 'all').map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
            <option value="year-desc">Latest First</option>
            <option value="year-asc">Oldest First</option>
            <option value="rating">Legendary Rating</option>
          </select>
        </div>
      </motion.div>

      <div className="results-info">
        {displayedMovies.length} Masterpiece{displayedMovies.length !== 1 ? 's' : ''} found
      </div>

      <motion.div 
        className="movies-grid"
        layout
      >
        <AnimatePresence mode='popLayout'>
          {displayedMovies.map((movie, idx) => (
            <motion.div 
              key={movie.id} 
              className="movie-card-premium"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedMovie(movie)}
              whileHover={{ y: -10 }}
            >
              <div className="movie-poster-wrapper">
                <img src={movie.image} alt={movie.title} onError={(e) => e.target.src = 'https://via.placeholder.com/600x900?text=' + movie.title} />
              </div>
              <div className="movie-card-overlay">
                <div className="movie-meta">
                  <span className="meta-tag">⭐ {movie.rating}</span>
                  <span className="meta-tag">{movie.year}</span>
                </div>
                <h3 className="movie-title-premium">{movie.title}</h3>
                <p className="movie-details">{movie.genre} • {movie.status}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedMovie && (
          <motion.div 
            className="movie-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedMovie(null)}>✕</button>
              
              <div className="modal-body">
                <img src={selectedMovie.image} alt={selectedMovie.title} className="modal-poster" />
                
                <div className="modal-info-pane">
                  <h2 className="gold-text">{selectedMovie.title}</h2>
                  <p className="info-value">{selectedMovie.year} • {selectedMovie.language}</p>
                  
                  <div className="info-grid">
                    <div>
                      <span className="info-label">Director</span>
                      <span className="info-value">{selectedMovie.director}</span>
                    </div>
                    <div>
                      <span className="info-label">Genre</span>
                      <span className="info-value">{selectedMovie.genre}</span>
                    </div>
                    <div>
                      <span className="info-label">Budget</span>
                      <span className="info-value">{selectedMovie.budget}</span>
                    </div>
                    <div>
                      <span className="info-label">Box Office</span>
                      <span className="info-value">{selectedMovie.collection}</span>
                    </div>
                  </div>

                  <div className="info-section">
                    <span className="info-label">Cast</span>
                    <p className="info-value">{selectedMovie?.cast?.join(', ') || 'N/A'}</p>
                  </div>

                  <div className="info-section" style={{ marginTop: '1.5rem' }}>
                    <span className="info-label">Saga</span>
                    <p style={{ color: 'var(--text-secondary)' }}>{selectedMovie.description}</p>
                  </div>

                  <div className="trailer-wrap">
                    <iframe
                      width="100%"
                      height="300"
                      src={selectedMovie.trailerUrl}
                      title="Movie Trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
