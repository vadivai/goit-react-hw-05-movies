import { useEffect, useState } from 'react';
import { fetchSearchMovies } from 'service/api';

export const useFetchSearch = query => {
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const getSearchMovies = async () => {
      try {
        const data = await fetchSearchMovies(query);
        console.log('SearchMovies', data);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchMovies();
  }, [query]);

  return { movies, isLoading, error };
};
