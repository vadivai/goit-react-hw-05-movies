import { ReviewsItem, ReviewsStyled } from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviewsInfo }) => {
  return (
    <ReviewsStyled>
      {reviewsInfo.map(({ id, author, content }) => {
        return (
          <ReviewsItem key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </ReviewsItem>
        );
      })}
    </ReviewsStyled>
  );
};
