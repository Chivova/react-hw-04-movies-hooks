import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';
import moviesApi from '../../api/movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieDetailsById(movieId).then(setMovieDetails);
  }, [movieId]);

  console.log(movieDetails);
  return (
  <>
          <PageHeading text={`Фильм ${movieId}`} />

      {movieDetails &&(<div> <img src={backdrop_path}></div>)}
    </>
  );
}
