import React, { useEffect, useState } from 'react';
import { fetchSearchMovies, fetchTrendMovies } from 'service/api';
import Movies from './Movies';
import { TrendLIst } from 'components/TrendsLIst/TrendsList';

// const styleHome = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
// };

// export default function () {
//   const [quizItems, setQuizItems] = useState([]);

//   useEffect(() => {
//     async function getQuizzes() {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const initialQuizzes = await fetchQuizzes();
//         setQuizItems(initialQuizzes);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getQuizzes();
//   }, []);

//список фильмов из трендов - запрос и рендеринг ссылок на фильмы, переходим на MovieDetail
// useEffect(() => {
//   return () => {};
// }, []);
// посмотреть в домашке 3 как делал запрос

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const fetchData = await fetchTrendMovies();
        // console.log('fetchData', fetchData);
        setMovies(prevState => [...prevState, ...fetchData]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  console.log('movies', movies);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movies.length > 0 && <TrendLIst movies={movies} />}
    </>
  );
};

export default Home;
