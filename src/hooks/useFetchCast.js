import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieActors } from 'service/api';

export const useFetchMovieCast = () => {
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const getCastItem = async () => {
      try {
        const data = await fetchMovieActors(movieId);
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCastItem();
  }, [movieId]);

  return { cast, isLoading, error };
};
