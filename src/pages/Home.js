import React from 'react';
import { useFetchTrends } from 'hooks/useFetchTrends';
// import { TrendList } from 'components/TrendList/TrendList';
import { MoviesList } from 'components/MovieList/MovieList';

// const styleHome = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
// };
// куда такой кусок кода вставляется?

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
