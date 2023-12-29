import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';

export const useFetchMovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const getMovieItem = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        // console.log('DataDetails', data);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieItem();
  }, [movieId]);

  return { movie, isLoading, error };
};
