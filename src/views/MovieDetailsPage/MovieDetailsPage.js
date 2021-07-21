import { useState, useEffect } from 'react';

import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';
import MovieCard from '../../components/MovieCard';
import moviesApi from '../../api/movies-api';
import Cast from '../Cast/Cast';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  console.log(url);
  const [movieDetails, setMovieDetails] = useState([null]);

  useEffect(() => {
    moviesApi.fetchMovieDetailsById(movieId).then(setMovieDetails);
  }, [movieId]);

  return (
    <>
      <PageHeading text={`Фильм ${movieDetails.title}`} />
      <MovieCard movie={movieDetails} />

      <Route to={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>
    </>
  );
}
