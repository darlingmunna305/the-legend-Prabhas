// Movies API with search and filtering

import { movies } from '../src/data/prabhasData.js';

export default function handler(req, res) {
  const { search, genre, year, sort } = req.query;
  
  let filtered = [...movies];

  // Search by title or description
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      movie =>
        movie.title.toLowerCase().includes(searchLower) ||
        movie.description.toLowerCase().includes(searchLower)
    );
  }

  // Filter by genre
  if (genre) {
    filtered = filtered.filter(movie =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  // Filter by year
  if (year) {
    filtered = filtered.filter(movie => movie.year === parseInt(year));
  }

  // Sort
  if (sort === 'latest') {
    filtered.sort((a, b) => b.year - a.year);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'oldest') {
    filtered.sort((a, b) => a.year - b.year);
  }

  res.status(200).json({
    success: true,
    count: filtered.length,
    movies: filtered,
  });
}
