import { MoviesList } from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const fetchData = await fetchSearchMovies('Titanik');
        // console.log('fetchData', fetchData);
        setMovies(prevState => [...prevState, fetchData]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  // console.log('movies', movies);

  return (
    <>
      <h2>Movies</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

// const Dogs = () => {
//   const [dogs, setDogs] = useState([
//     'dog-1',
//     'dog-2',
//     'dog-3',
//     'dog-4',
//     'dog-5',
//   ]);
//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const dogId = searchParams.get('dogId') ?? '';

// HTTP-запрос
// useEffect(() => {
//   return () => {};
// }, []);

//  const updateQueryString = evt => {
//    const dogIdValue = evt.target.value;
//    if (dogIdValue === '') {
//      return setSearchParams({});
//    }
//    setSearchParams({ dogId: dogIdValue });
//  };

export default Movies;

// return (
//     <div>
//       <input type="text" value={dogId} onChange={updateQueryString} />
//       <ul>
//         {visibleDogs.map(dog => {
//           return (
//             <li key={dog}>
//               <Link to={`${dog}`} state={{ from: location }}>
//                 {dog}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Dogs;
