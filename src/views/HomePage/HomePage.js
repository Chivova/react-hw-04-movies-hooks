import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import moviesApi from '../../api/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import PageHeading from '../../components/PageHeading';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    moviesApi.fetchTrendingMovies().then(setMovies).finally(setLoading(false));
  }, []);

  return (
    <div>
      <PageHeading text="Tranding Today" />
      {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )}
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
