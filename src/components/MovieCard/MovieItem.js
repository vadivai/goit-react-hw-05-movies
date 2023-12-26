import { ItemWrapper, LiItem } from './MovieItem.styled';

export const MovieItem = ({
  movieItem: { title, release_date, vote_average, overview, genres },
}) => {
  return (
    <ItemWrapper>
      <h3>
        {title} ({release_date.slice(0, 4)})
      </h3>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h4>Overview:</h4>
      <p>{overview}</p>
      <h4>Genres:</h4>
      <p>{genres.map(({ name }) => name).join(', ')}</p>
    </ItemWrapper>
  );
};

// homepage: 'https://www.rebelmoon70mm.com';
// poster_path: '/990xOjKvSiIxeKlwaH1i5WiH4zv.jpg';

// title: "Rebel Moon - Part One: A Child of Fire"
// release_date: "2023-12-15"

// User score
// vote_average: 6.453

// overview: "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent
// genres: Array(3);
