import { useState, useEffect, Fragment } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import moviesApi from '../../api/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm';

export default function MoviesPage() {
  const [movieQuery, setMovieQuery] = useState('');
  const [moviesByName, setMoviesByName] = useState([]);
  const [error, setError] = useState('');

  const handleFormSubmit = query => {
    setMovieQuery(query);
    console.log(movieQuery);
  };

  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    moviesApi.fetchMoviesSearchByName(movieQuery).then(response => {
      if (response.length === 0) {
        setError(<h2>No movies on your query ${movieQuery}</h2>);
      }
      setMoviesByName(response);
    });
  }, [movieQuery]);

  return (
    <Fragment>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {moviesByName.length > 1 ? <MovieList movies={moviesByName} /> : error}
    </Fragment>
  );
}
