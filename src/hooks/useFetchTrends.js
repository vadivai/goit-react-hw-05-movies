import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'service/api';

export const useFetchTrends = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const getMovies = async () => {
      try {
        const data = await fetchTrendMovies();
        setMovies(data);
        // console.log('fetchData/movies', data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return { isLoading, error, movies };
};
