import { Link } from 'react-router-dom';

export const TrendLIst = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={'/891699'}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
