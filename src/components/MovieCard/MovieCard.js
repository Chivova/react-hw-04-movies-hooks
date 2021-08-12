import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import s from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { backdrop_path, title, overview, genres, vote_average } = movie;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
   const history = useHistory();
   const location = useLocation();

  return (
    <Fragment>

  <button  type="button" onClick = {()=> (history.push('./'))}>
        Go back
      </button>
   <div>

   <img
        src={backdrop_path ? `${POSTER_URL}/${backdrop_path}` : "https://dummyimage.com/200x300/b3b3b3/fff.jpg&text=No+image"}
        alt={title}
      />
      <p className={s.text}>User score: {vote_average}</p>
      <h3 className={s.title}>Overview:</h3>
      <p> {overview}</p>
      <h3 className={s.title}> Gentres:</h3>
      <ul>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul></div>
    </Fragment>
  );
}
