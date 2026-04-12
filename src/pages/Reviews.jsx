import React, { useState } from 'react'
import { reviews } from '../data/prabhasData'
import '../styles/pages/reviews.css'

export default function Reviews() {
  const [newReview, setNewReview] = useState({
    userName: '',
    movie: '',
    rating: 5,
    comment: ''
  })
  const [allReviews, setAllReviews] = useState(reviews)

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (newReview.userName && newReview.movie && newReview.comment) {
      const review = {
        id: allReviews.length + 1,
        ...newReview,
        date: new Date().toISOString().split('T')[0]
      }
      setAllReviews([review, ...allReviews])
      setNewReview({ userName: '', movie: '', rating: 5, comment: '' })
    }
  }

  const sortedReviews = [...allReviews].sort((a, b) => new Date(b.date) - new Date(a.date))

  const renderStars = (rating) => {
    return '⭐'.repeat(rating)
  }

  return (
    <div className="reviews">
      <div className="reviews-header">
        <h1>Fan Reviews</h1>
        <p>Share your thoughts about Prabhas' films</p>
      </div>

      <div className="reviews-container">
        <div className="review-form-section">
          <h2>Write a Review</h2>
          <form onSubmit={handleSubmitReview} className="review-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Movie</label>
              <select
                value={newReview.movie}
                onChange={(e) => setNewReview({ ...newReview, movie: e.target.value })}
                required
              >
                <option value="">Select a movie</option>
                <option value="Baahubali: The Beginning">Baahubali: The Beginning</option>
                <option value="Baahubali 2: The Conclusion">Baahubali 2: The Conclusion</option>
                <option value="Mirchi">Mirchi</option>
                <option value="Darling">Darling</option>
                <option value="Sahoo">Sahoo</option>
                <option value="Radhe Shyam">Radhe Shyam</option>
                <option value="Adipurush">Adipurush</option>
                <option value="Salaar">Salaar</option>
              </select>
            </div>

            <div className="form-group">
              <label>Rating (1-5 stars)</label>
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    className={`star-btn ${newReview.rating >= star ? 'active' : ''}`}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Your Review</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Share your thoughts..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Post Review</button>
          </form>
        </div>

        <div className="reviews-list-section">
          <h2>All Reviews ({allReviews.length})</h2>
          
          {sortedReviews.length === 0 ? (
            <p className="no-reviews">No reviews yet. Be the first to review!</p>
          ) : (
            <div className="reviews-list">
              {sortedReviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <h4>{review.userName}</h4>
                      <p className="movie-title">{review.movie}</p>
                    </div>
                    <div className="review-meta">
                      <span className="rating">{renderStars(review.rating)}</span>
                      <span className="date">{review.date}</span>
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
