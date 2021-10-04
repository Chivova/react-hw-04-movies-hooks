import { Link, useLocation } from 'react-router-dom';
import s from './SearchMovieList.module.css';

export default function SearchMovieList({ movies, searchValue }) {
  const { pathname } = useLocation();

  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={s.link}
            to={{
              pathname: `${pathname}/${movie.id}`,
              state: {
                backUrl: pathname,
                from: searchValue,
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
