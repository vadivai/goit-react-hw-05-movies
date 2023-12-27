import React from 'react';
import { useFetchMovieCast } from 'hooks/useFetchCast';
import { CastInfo } from 'components/CastInfo/CastInfo';

export const Cast = () => {
  const { cast, isLoading, error } = useFetchMovieCast();
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>Something went wrong...</h5>}
      {cast && <CastInfo castInfo={cast} />}
    </>
  );
};

export default Cast;
