import React from 'react';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      <div>Movies</div>
      <NavLink to="/movies/:movieId">MovieDetails</NavLink>
    </>
  );
};
