import React from 'react';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useFetchSearch } from 'hooks/useFetchSearch';
import { MoviesList } from 'components/MovieList/MovieList';

const Movies = () => {
  const { movies, isLoading, error } = useFetchSearch();

  return (
    <>
      <Searchbar />
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
