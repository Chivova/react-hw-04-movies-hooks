import { useState, useEffect, Fragment } from 'react';

import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';
import MovieCard from '../../components/MovieCard';
import moviesApi from '../../api/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState([null]);

  useEffect(() => {
    moviesApi.fetchMovieDetailsById(movieId).then(setMovieDetails);
  }, [movieId]);

  return (
    <Fragment>
      <PageHeading text={`Фильм ${movieDetails.title}`} />
      <MovieCard movie={movieDetails} />

      <NavLink to={`${url}/cast`}>Cast</NavLink>
      <Route path={`${path}/cast`}>
        <Cast movieId={movieId} />
      </Route>
      <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      <Route path={`${path}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </Fragment>
  );
}
