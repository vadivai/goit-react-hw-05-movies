import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieDetails();
  // console.log('movie', movie);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movie && <MovieInfo movieInfo={movie} />}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
