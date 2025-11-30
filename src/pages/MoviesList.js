import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import { getPopularMovies, searchMovies, getGenres, getMoviesByGenre } from '../services/api';
import './MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [searchQuery, selectedGenre, currentPage]);

  const fetchGenres = async () => {
    try {
      const genreList = await getGenres();
      setGenres(genreList);
    } catch (err) {
      console.error('Failed to fetch genres:', err);
    }
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let data;
      if (searchQuery) {
        data = await searchMovies(searchQuery, currentPage);
      } else if (selectedGenre) {
        data = await getMoviesByGenre(selectedGenre, currentPage);
      } else {
        data = await getPopularMovies(currentPage);
      }
      
      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre(null);
    setCurrentPage(1);
  };

  const handleGenreFilter = (genreId) => {
    setSelectedGenre(genreId === selectedGenre ? null : genreId);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="movies-list-container">
      <div className="movies-header">
        <h1 className="page-title">
          {searchQuery 
            ? `Search Results for "${searchQuery}"` 
            : selectedGenre 
              ? `${genres.find(g => g.id === selectedGenre)?.name} Movies`
              : 'Popular Movies'}
        </h1>
        
        <div className="search-wrapper">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="genre-filters">
          <button
            className={`genre-chip ${!selectedGenre ? 'active' : ''}`}
            onClick={() => handleGenreFilter(null)}
          >
            All
          </button>
          {genres.map(genre => (
            <button
              key={genre.id}
              className={`genre-chip ${selectedGenre === genre.id ? 'active' : ''}`}
              onClick={() => handleGenreFilter(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader message="Loading amazing movies..." />}
      
      {error && <ErrorMessage message={error} onRetry={fetchMovies} />}

      {!loading && !error && movies.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🎬</div>
          <h3>No movies found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="load-more-section">
            <button className="load-more-button" onClick={handleLoadMore}>
              Load More Movies 🎬
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
