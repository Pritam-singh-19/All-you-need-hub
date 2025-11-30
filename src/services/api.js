import axios from 'axios';

// ⚠️ IMPORTANT: Replace with your own TMDB API key
// Get a free API key from: https://www.themoviedb.org/settings/api
// Instructions in API_KEY_SETUP.md
const API_KEY = '142ce1aa48b35a4c25b8394ede411f8a';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/top_rated', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch top rated movies');
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch trending movies');
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get('/search/movie', {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to search movies');
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'credits,videos,similar',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies by genre');
  }
};

export const getGenres = async () => {
  try {
    const response = await api.get('/genre/movie/list');
    return response.data.genres;
  } catch (error) {
    throw new Error('Failed to fetch genres');
  }
};

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return '/placeholder-movie.png';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export default api;
