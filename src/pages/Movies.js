import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div>Movies</div>
      <Link to="/movies/:movieId">MovieDetails</Link>
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
