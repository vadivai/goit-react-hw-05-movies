import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useFetchMovieReviews } from 'hooks/useFetchReviews';
import React from 'react';

const Reviews = () => {
  const { reviews, isLoading, error } = useFetchMovieReviews();
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>Something went wrong...</h5>}
      {/* reviews.length > 0 */}
      {reviews ? (
        <ReviewsInfo reviewsInfo={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
