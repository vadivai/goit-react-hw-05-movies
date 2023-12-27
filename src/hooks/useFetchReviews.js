import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api';

export const useFetchMovieReviews = () => {
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const getReviewsItem = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        // console.log('Reviews', data);
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getReviewsItem();
  }, [movieId]);

  return { reviews, isLoading, error };
};
