import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { MovieItem } from 'components/MovieCard/MovieItem';

export const MovieDetails = () => {
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  const { movie, isLoading, error } = useFetchMovieDetails();

  return (
    <>
      {/* <Link> Назад к странице коллекции</Link> */}
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movie && <MovieItem movieItem={movie} />}
      <ul>
        <li>
          <Link to="cast">MovieActors</Link>
        </li>
        <li>
          <Link to="reviews">MovieReviews</Link>
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
