import { useState, useEffect, Fragment } from 'react';
import Loader from 'react-loader-spinner';

import moviesApi from '../../api/movies-api';
import SearchMovieList from '../../components/SearchMovieList/SearchMovieList';
import SearchForm from '../../components/SearchForm';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useHistory, useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { search } = useLocation();
  const [movieQuery, setMovieQuery] = useState('');
  const [moviesByName, setMoviesByName] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const searchParam = new URLSearchParams(search).get('query');

  const handleFormSubmit = query => {
    setMovieQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };
  // console.log(`MoviesPage ${search}`);
  useEffect(() => {
    if (search === '') {
      return;
    }

    setLoading(true);

    moviesApi
      .fetchMoviesSearchByName(searchParam)
      .then(response => {
        if (response.length === 0) {
          setError(<h2>No movies on your query ${searchParam}</h2>);
        }
        setMoviesByName(response);
      })
      .finally(setLoading(false));

    history.push({
      search: `query=${searchParam}`,
    });
  }, [history, movieQuery, search, searchParam]);
  return (
    <Fragment>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )}
      {moviesByName.length > 1 ? (
        <SearchMovieList movies={moviesByName} searchValue={search} />
      ) : (
        error
      )}
    </Fragment>
  );
}
