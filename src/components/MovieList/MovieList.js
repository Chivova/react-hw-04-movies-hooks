import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link className={s.link} to={`movies/${movie.id}`}>
            {movie.original_title || movie.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}
