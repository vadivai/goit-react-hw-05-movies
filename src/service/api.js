import axios from 'axios';

const API_KEY = '2538fce76e0bd4d5dc25f5ba463caaa5';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  // language: 'uk-UA',
  language: 'en-US',
};

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchTrendMovies = async () => {
  const response = await axios.get('trending/movie/day');
  // console.log('response.data.results', response.data.results);
  return response.data.results;
};

// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
export const fetchSearchMovies = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  console.log('SearchMovies', response.data);
  return response.data;
};

// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  // console.log('response.data', response.data);
  return response.data;
};

// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
export const fetchMovieActors = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  // console.log('cast', response.data.cast);
  return response.data.cast;
};

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  // console.log('response.data', response.data);
  return response.data.results;
};
