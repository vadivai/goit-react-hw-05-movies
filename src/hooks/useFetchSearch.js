import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api';

export const useFetchSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  // console.log('searchParams', movieName);

  useEffect(() => {
    if (!movieName) {
      return;
    }
    setIsLoading(true);
    setError(false);

    const getSearchMovies = async () => {
      try {
        const data = await fetchSearchMovies(movieName);
        // console.log('SearchMovies', data);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchMovies();
  }, [movieName]);

  const onHandleSubmit = value => {
    // setSearchParams({ query: value });
  };

  return { movies, isLoading, error, onHandleSubmit };
};
