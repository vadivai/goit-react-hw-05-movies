import axios from 'axios';

const API_KEY = '2538fce76e0bd4d5dc25f5ba463caaa5';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchTrendMovies = async () => {
  const response = await axios.get('/3/trending/movie/day');
  console.log('response.data', response.data);
  return response.data;
};

// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
export const fetchSearchMovies = async movieName => {
  const response = await axios.get(`/3/search/movie?query=${movieName}`);
  console.log('response.data', response.data);
  return response.data;
};

// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/3/search/movie/${movieId}`);
  console.log('response.data', response.data);
  return response.data;
};

// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
export const fetchMovieActors = async movieId => {
  const response = await axios.get(`/3/search/movie/${movieId}/credits`);
  console.log('response.data', response.data);
  return response.data;
};

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/3/search/movie/${movieId}/reviews`);
  console.log('response.data', response.data);
  return response.data;
};
