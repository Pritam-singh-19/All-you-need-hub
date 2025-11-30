import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import MovieCard from '../components/MovieCard';
import { getMovieDetails, getImageUrl } from '../services/api';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMovieDetails(id);
      setMovie(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading movie details..." />;
  if (error) return <ErrorMessage message={error} onRetry={fetchMovieDetails} />;
  if (!movie) return null;

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
    runtime,
    genres,
    production_companies,
    budget,
    revenue,
    tagline,
    credits,
    videos,
    similar,
  } = movie;

  const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const trailer = videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Movies
      </button>

      <div 
        className="movie-backdrop"
        style={{ backgroundImage: `url(${getImageUrl(backdrop_path, 'original')})` }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      <div className="movie-detail-content">
        <div className="movie-main-info">
          <div className="movie-poster-large">
            <img src={getImageUrl(poster_path, 'w500')} alt={title} />
          </div>

          <div className="movie-info">
            <h1 className="movie-detail-title">{title}</h1>
            
            {tagline && <p className="movie-tagline">"{tagline}"</p>}

            <div className="movie-stats">
              <div className="stat-item">
                <span className="stat-label">Rating</span>
                <span className="stat-value rating">
                  ⭐ {vote_average?.toFixed(1)}
                  <span className="vote-count">({vote_count} votes)</span>
                </span>
              </div>
              
              <div className="stat-item">
                <span className="stat-label">Release Date</span>
                <span className="stat-value">
                  {release_date ? new Date(release_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'N/A'}
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-label">Runtime</span>
                <span className="stat-value">{formatRuntime(runtime)}</span>
              </div>
            </div>

            <div className="movie-genres">
              {genres?.map(genre => (
                <span key={genre.id} className="genre-badge">
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="movie-overview">
              <h3>Overview</h3>
              <p>{overview || 'No overview available.'}</p>
            </div>

            <div className="movie-financial">
              <div className="financial-item">
                <span className="financial-label">Budget</span>
                <span className="financial-value">{formatCurrency(budget)}</span>
              </div>
              <div className="financial-item">
                <span className="financial-label">Revenue</span>
                <span className="financial-value">{formatCurrency(revenue)}</span>
              </div>
            </div>
          </div>
        </div>

        {trailer && (
          <div className="trailer-section">
            <h2 className="section-heading">Watch Trailer</h2>
            <div className="trailer-container">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {credits?.cast && credits.cast.length > 0 && (
          <div className="cast-section">
            <h2 className="section-heading">Top Cast</h2>
            <div className="cast-grid">
              {credits.cast.slice(0, 8).map(person => (
                <div key={person.id} className="cast-card">
                  <div className="cast-photo">
                    <img
                      src={getImageUrl(person.profile_path, 'w185')}
                      alt={person.name}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="cast-info">
                    <p className="cast-name">{person.name}</p>
                    <p className="cast-character">{person.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {production_companies && production_companies.length > 0 && (
          <div className="production-section">
            <h2 className="section-heading">Production Companies</h2>
            <div className="production-grid">
              {production_companies.map(company => (
                <div key={company.id} className="production-card">
                  {company.logo_path && (
                    <img
                      src={getImageUrl(company.logo_path, 'w185')}
                      alt={company.name}
                      className="production-logo"
                    />
                  )}
                  <p className="production-name">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {similar?.results && similar.results.length > 0 && (
          <div className="similar-section">
            <h2 className="section-heading">Similar Movies</h2>
            <div className="similar-grid">
              {similar.results.slice(0, 6).map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
