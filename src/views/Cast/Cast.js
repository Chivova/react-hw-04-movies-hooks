import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import moviesApi from '../../api/movies-api';

export default function Cast({ movieId }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieActorsCredit(movieId).then(setAuthors);
  }, []);
  console.log(authors);

  return (
    <>{authors && <ul>{authors.map(author => console.log(author.name))}</ul>}</>
  );
}
