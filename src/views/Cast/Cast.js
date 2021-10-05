import { useState, useEffect, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import moviesApi from '../../api/movies-api';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  const AUTHOR_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setLoading(true);
    moviesApi
      .fetchMovieActorsCredit(movieId)
      .then(({ cast }) => setActors(cast))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <Fragment>
      {loading && (
        <Loader type="Watch" color="#00BFFF" height={50} width={50} />
      )}
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
                    : 'https://dummyimage.com/200x300/b3b3b3/fff.jpg&text=No+image'
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
