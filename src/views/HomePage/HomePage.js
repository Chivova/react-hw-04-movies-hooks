import { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner';

import moviesApi from '../../api/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import PageHeading from '../../components/PageHeading';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <PageHeading text="Tranding Today" />

      {movies && <MovieList movies={movies} />}
    </div>
  );
}
