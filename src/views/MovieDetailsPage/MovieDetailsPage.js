import { useState, useEffect, Fragment, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
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
  const [movieDetails, setMovieDetails] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const history = useHistory();
  console.log(state.search);
  useEffect(() => {
    // setLoading(true);
    moviesApi.fetchMovieDetailsById(movieId).then(setMovieDetails);
    // .finally(setLoading(false));
  }, [movieId]);

  const handleGoBack = () => {
    history.push({ pathname: state?.backUrl || '/' });

    // if (state?.search) {
    //   history.push({
    //     search: state.search,
    //   });
    // }
  };

  return (
    <Fragment>
      {/* {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )} */}
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movieDetails.title && (
        <PageHeading text={`Фильм ${movieDetails.title}`} />
      )}

      <MovieCard movie={movieDetails} />

      <NavLink className={s.navLink} to={`${url}/cast`}>
        Cast
      </NavLink>

      <NavLink className={s.navLink} to={`${url}/reviews`}>
        Reviews
      </NavLink>
      <Suspense fallback={<h1>Loading</h1>}>
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
