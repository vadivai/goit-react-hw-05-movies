import React from 'react';
import { useFetchTrends } from 'hooks/useFetchTrends';
import { MoviesList } from 'components/MovieList/MovieList';

const Home = () => {
  const { movies, isLoading, error } = useFetchTrends();

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
