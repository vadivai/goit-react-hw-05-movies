import { Link } from 'react-router-dom';

export const TrendList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} title={title}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
