import { useState, useEffect, Fragment } from 'react';
import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import PageHeading from '../../components/PageHeading';
import MovieCard from '../../components/MovieCard';
import moviesApi from '../../api/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState([null]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    moviesApi
      .fetchMovieDetailsById(movieId)
      .then(setMovieDetails)
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <Fragment>
      {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )}
      <PageHeading text={`Фильм ${movieDetails.title}`} />

      <MovieCard movie={movieDetails} />

      <NavLink className={s.navLink} to={`${url}/cast`}>
        Cast
      </NavLink>
      <Route path={`${path}/cast`}>
        <Cast movieId={movieId} />
      </Route>
      <NavLink className={s.navLink} to={`${url}/reviews`}>
        Reviews
      </NavLink>
      <Route path={`${path}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </Fragment>
  );
}
