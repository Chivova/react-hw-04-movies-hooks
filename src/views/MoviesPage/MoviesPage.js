import { useState, useEffect, Fragment } from 'react';
import Loader from 'react-loader-spinner';

import moviesApi from '../../api/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function MoviesPage() {
  const [movieQuery, setMovieQuery] = useState('');
  const [moviesByName, setMoviesByName] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = query => {
    setMovieQuery(query);
  };

  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    setLoading(true);

    moviesApi
      .fetchMoviesSearchByName(movieQuery)
      .then(response => {
        if (response.length === 0) {
          setError(<h2>No movies on your query ${movieQuery}</h2>);
        }
        setMoviesByName(response);
      })
      .finally(setLoading(false));
  }, [movieQuery]);

  return (
    <Fragment>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )}
      {moviesByName.length > 1 ? <MovieList movies={moviesByName} /> : error}
    </Fragment>
  );
}
