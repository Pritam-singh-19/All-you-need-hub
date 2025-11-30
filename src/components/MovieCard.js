import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../services/api';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average, release_date } = movie;
  
  const getRatingColor = (rating) => {
    if (rating >= 7.5) return '#4ade80';
    if (rating >= 6) return '#fbbf24';
    return '#f87171';
  };

  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <div className="movie-card-image">
        <img 
          src={getImageUrl(poster_path)} 
          alt={title}
          loading="lazy"
        />
        <div className="movie-card-overlay">
          <span className="view-details">View Details →</span>
        </div>
      </div>
      
      <div className="movie-card-content">
        <h3 className="movie-title">{title}</h3>
        
        <div className="movie-meta">
          <span 
            className="movie-rating" 
            style={{ color: getRatingColor(vote_average) }}
          >
            ⭐ {vote_average?.toFixed(1)}
          </span>
          <span className="movie-year">
            {release_date ? new Date(release_date).getFullYear() : 'N/A'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
