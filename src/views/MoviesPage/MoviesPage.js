import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import moviesApi from '../../api/movies-api';
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
      {moviesByName.length > 1
        ? moviesByName.map(movieByName => (
            <li key={movieByName.id}>
              <Link to={`movies/${movieByName.id}`}>
                {movieByName.original_title || movieByName.name}
              </Link>
            </li>
          ))
        : error}
    </Fragment>
  );
}
