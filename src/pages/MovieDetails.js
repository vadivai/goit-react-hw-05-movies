import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails</div>
      <ul>
        <li>
          <Link to="/movies/:movieId/cast">MovieActors</Link>
        </li>
        <li>
          <Link to="/movies/:movieId/reviews">MovieReviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
