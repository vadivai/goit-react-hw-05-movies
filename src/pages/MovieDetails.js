import React, { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams;
  console.log('movieId', movieId);
  // HTTP-запрос
  // useEffect(() => {
  //   return () => {};
  // }, []);

  // const DogDetails = () => {
  //   const location = useLocation();
  //   const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  //   const { dogId } = useParams();

  return (
    <>
      <div>MovieDetails</div>
      <Link> Назад к странице коллекции</Link>
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
