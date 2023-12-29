import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api';

export const useFetchSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  // console.log('searchParams', searchQuery );

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    setError(false);

    const getSearchMovies = async () => {
      try {
        const data = await fetchSearchMovies(searchQuery);
        // console.log('SearchMovies', data);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchMovies();
  }, [searchQuery]);

  // const onHandleSubmit = value => {
  //   setSearchParams({ query: value });
  // };
  // setSearchParams({ query: movieName });

  return { movies, isLoading, error };
};
