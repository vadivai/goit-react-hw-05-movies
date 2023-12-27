import React from 'react';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useFetchSearch } from 'hooks/useFetchSearch';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieId = searchParams.get('movieId') ?? '';

  const { movies, isLoading, error } = useFetchSearch();

  // const updateQueryString = evt => {
  //    const dogIdValue = evt.target.value;
  //    if (dogIdValue === '') {
  //      return setSearchParams({});
  //    }
  //    setSearchParams({ dogId: dogIdValue });
  //  };

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

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>Something went wrong...</h2>}
      {movies && <Searchbar />}
    </>
  );
};

export default Movies;

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
