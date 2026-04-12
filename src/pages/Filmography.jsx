import React, { useState, useEffect } from 'react'
import { movies } from '../data/prabhasData'
import '../styles/pages/filmography.css'

export default function Filmography() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [sortBy, setSortBy] = useState('year-asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterGenre, setFilterGenre] = useState('all')
  const [filterYear, setFilterYear] = useState('all')
  const [displayedMovies, setDisplayedMovies] = useState(movies)

  // Get unique genres and years for filter options
  const genres = ['all', ...new Set(movies.map(m => m.genre))]
  const years = ['all', ...new Set(movies.map(m => m.year)).sort((a, b) => b - a)]

  useEffect(() => {
    let filtered = [...movies]

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        movie =>
          movie.title.toLowerCase().includes(searchLower) ||
          movie.description.toLowerCase().includes(searchLower) ||
          movie.cast.some(actor => actor.toLowerCase().includes(searchLower))
      )
    }

    // Genre filter
    if (filterGenre !== 'all') {
      filtered = filtered.filter(movie => movie.genre === filterGenre)
    }

    // Year filter
    if (filterYear !== 'all') {
      filtered = filtered.filter(movie => movie.year === parseInt(filterYear))
    }

    // Sort
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
      <div className="filmography-header">
        <h1>Filmography</h1>
        <p>Explore all of Prabhas' films</p>
      </div>

      <div className="filmography-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by movie title, actor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

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
            <option value="year-asc">Oldest First</option>
            <option value="year-desc">Latest First</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="results-info">
        {displayedMovies.length} movie{displayedMovies.length !== 1 ? 's' : ''} found
      </div>

      <div className="movies-grid">
        {displayedMovies.map(movie => (
          <div 
            key={movie.id} 
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <div style={{ position: 'relative' }}>
              <img src={movie.image} alt={movie.title} />
              <div className="year-badge">{movie.year}</div>
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p className="year">Year: {movie.year}</p>
              <div className="rating">
                <span className="stars">⭐ {movie.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-modal" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMovie(null)}>✕</button>
            
            <div className="modal-body">
              <img src={selectedMovie.image} alt={selectedMovie.title} />
              
              <div className="modal-details">
                <h2>{selectedMovie.title}</h2>
                <p className="year">{selectedMovie.year}</p>
                
                <div className="info-section">
                  <h4>Language</h4>
                  <p>{selectedMovie.language}</p>
                </div>

                <div className="info-section">
                  <h4>Genre</h4>
                  <p>{selectedMovie.genre}</p>
                </div>

                <div className="info-section">
                  <h4>Director</h4>
                  <p>{selectedMovie.director}</p>
                </div>

                <div className="info-section">
                  <h4>Cast</h4>
                  <p>{selectedMovie.cast.join(', ')}</p>
                </div>

                <div className="info-section">
                  <h4>Description</h4>
                  <p>{selectedMovie.description}</p>
                </div>

                <div className="info-section">
                  <h4>Rating</h4>
                  <p className="rating-badge">⭐ {selectedMovie.rating}/10</p>
                </div>

                <div className="trailer-section">
                  <h4>Watch Trailer</h4>
                  <div className="trailer-container">
                    <iframe
                      width="100%"
                      height="400"
                      src={selectedMovie.trailerUrl}
                      title="Movie Trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="streaming-links">
                  <h4>Watch Full Movie (Legal Streaming with Quality Options)</h4>
                  <div className="links-list">
                    {Object.entries(selectedMovie.streamingLinks).map(([platform, details]) => {
                      const link = typeof details === 'string' ? details : details.url
                      const quality = typeof details === 'object' ? details.quality : 'Available'
                      return (
                        <a 
                          key={platform} 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="streaming-link"
                        >
                          <span className="platform-name">{platform}</span>
                          <span className="quality-badge">{quality}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
