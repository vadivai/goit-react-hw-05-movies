import React, { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  // const location = useLocation();

  const { movie, isLoading, error } = useFetchMovieDetails();
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
      {/* <Suspense fallback={<div>LOADING SUBPAGE...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default MovieDetails;

//  return (
//     <>
//       <h1>DogDetails: {dogId}</h1>
//       <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
//       <ul>
//         <li>
//           <Link to="subbreeds" state={from: location.state.from}>Подподроды</Link>
//         </li>
//         <li>
//           <Link to="gallery" state={from: location.state.from}>Галерея</Link>
//         </li>
//       </ul>
//       <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// export default DogDetails;
