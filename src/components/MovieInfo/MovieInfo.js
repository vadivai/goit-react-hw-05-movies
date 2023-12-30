import { Description, ItemWrapper } from './MovieInfo.styled';
import NoPhoto from 'other/no_photo-min.jpg';

export const MovieInfo = ({
  movieInfo: {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => {
  return (
    <ItemWrapper>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : NoPhoto
        }
        alt={title}
        width="180"
      />
      <Description>
        <h3>
          {title} ({release_date.slice(0, 4)})
        </h3>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h4>Overview:</h4>
        <p>{overview}</p>
        <h4>Genres:</h4>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </Description>
    </ItemWrapper>
  );
};
