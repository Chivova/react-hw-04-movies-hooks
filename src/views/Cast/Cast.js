import { useState, useEffect, Fragment } from 'react';
// import { useParams } from 'react-router-dom';
import moviesApi from '../../api/movies-api';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);
  const AUTHOR_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    moviesApi
      .fetchMovieActorsCredit(movieId)
      .then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    <Fragment>
      {actors && (
        <ul>
          {actors.map(({ cast_id, name, profile_path }) => (
            <li key={cast_id}>
              <h4>{name}</h4>
              <img
                width={'180px'}
                height={'200px'}
                src={
                  profile_path
                    ? `${AUTHOR_IMG_URL}/${profile_path}`
                    : 'Image not found'
                }
                alt={name}
              />
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
