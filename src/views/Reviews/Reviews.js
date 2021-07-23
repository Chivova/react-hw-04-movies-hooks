import { useState, useEffect } from 'react';
import moviesApi from '../../api/movies-api';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    moviesApi.fetchMovieReviews(movieId).then(({ results }) => {
      if (results === 0) {
        return 'Not Found';
      }
      setReviews(results);
    });
  }, [movieId]);

  return (
    <ul>
      {!reviews.length ? (
        <h3>Sorry, we don't have reviews for this movie</h3>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
}
