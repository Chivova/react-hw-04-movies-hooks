import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const { pathname } = useLocation();

  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={s.link}
            to={{
              pathname: `movies/${movie.id}`,
              state: {
                backUrl: pathname,
              },
            }}
          >
            {movie.original_title || movie.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}
