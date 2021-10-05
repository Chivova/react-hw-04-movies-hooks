import { useState, useEffect, Fragment, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import PageHeading from '../../components/PageHeading';
import MovieCard from '../../components/MovieCard';
import moviesApi from '../../api/movies-api';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews-page" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState([null]);
  const { state } = useLocation();
  const history = useHistory();

  useEffect(() => {
    moviesApi.fetchMovieDetailsById(movieId).then(setMovieDetails);
  }, [movieId]);

  const handleGoBack = () => {
    history.push({
      pathname: state?.backUrl || '/',
    });

    if (state?.from) {
      history.push({
        search: state.from,
      });
    }
  };

  return (
    <Fragment>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movieDetails.title && (
        <PageHeading text={`Фильм ${movieDetails.title}`} />
      )}
      {movieDetails.id && <MovieCard movie={movieDetails} />}

      <NavLink
        className={s.navLink}
        to={{ pathname: `${url}/cast`, state: { ...state } }}
      >
        Cast
      </NavLink>

      <NavLink
        className={s.navLink}
        to={{ pathname: `${url}/reviews`, state: { ...state } }}
      >
        Reviews
      </NavLink>
      <Suspense
        fallback={
          <Loader
            className={s.spinner}
            type="Oval"
            color="rgb(139, 0, 0)"
            height={80}
            width={80}
          />
        }
      >
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </Fragment>
  );
}
