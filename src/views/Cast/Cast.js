import { useState, useEffect, Fragment } from 'react';
import moviesApi from '../../api/movies-api';

import s from './Cast.module.css';

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
        <ul className={s.castList}>
          {actors.map(({ cast_id, name, profile_path }) => (
            <li key={cast_id}>
              <h4>{name}</h4>
              <img
                width={'200px'}
                height={'250px'}
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
