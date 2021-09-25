import { useState, useEffect, Fragment, lazy, Suspense } from 'react';
import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
// import Loader from 'react-loader-spinner';

import PageHeading from '../../components/PageHeading';
import MovieCard from '../../components/MovieCard';
import moviesApi from '../../api/movies-api';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews-page" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState([null]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);

    moviesApi.fetchMovieDetailsById(movieId).then(setMovieDetails);
  }, [movieId]);

  return (
    <Fragment>
      {/* {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )} */}
      {movieDetails && <MovieCard movie={movieDetails} />}
      {/* {movieDetails.title && (
        <PageHeading text={`Фильм ${movieDetails.title}`} />
      )}
      <Suspense fallback={<h1>LOAD</h1>}>
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
      </Suspense> */}
    </Fragment>
  );
}
