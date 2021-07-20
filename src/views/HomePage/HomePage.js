import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from '../../api/movies-api';
import PageHeading from '../../components/PageHeading';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <div>
      <PageHeading text="Tranding Today" />
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
    </div>
  );
}
