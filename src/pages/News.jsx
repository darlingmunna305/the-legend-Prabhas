import React, { useState } from 'react'
import { news } from '../data/prabhasData'
import '../styles/pages/news.css'

export default function News() {
  const [expandedNews, setExpandedNews] = useState(null)

  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="news">
      <div className="news-header">
        <h1>Latest News</h1>
        <p>Stay updated with the latest about Prabhas</p>
      </div>

      <div className="news-container">
        {sortedNews.map(newsItem => (
          <div 
            key={newsItem.id} 
            className="news-item"
            onClick={() => setExpandedNews(expandedNews === newsItem.id ? null : newsItem.id)}
          >
            <div className="news-header-item">
              <h3>{newsItem.title}</h3>
              <span className="news-date">
                {new Date(newsItem.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <p className="news-source">Source: {newsItem.source}</p>

            {expandedNews === newsItem.id && (
              <div className="news-content">
                <p>{newsItem.content}</p>
              </div>
            )}

            <div className="news-toggle">
              {expandedNews === newsItem.id ? '▼ Show Less' : '▶ Read More'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
