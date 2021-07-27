import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            {movie.original_title || movie.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}
