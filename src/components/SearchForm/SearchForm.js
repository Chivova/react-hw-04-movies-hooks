import { useState } from 'react';
import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [movieQuery, setMovieQuery] = useState('');

  const handleMovieQueryChange = e => {
    const { value } = e.target;
    setMovieQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieQuery.trim() === '') {
      alert('Miss query, try again!!');
      return;
    }
    onSubmit(movieQuery);
    setMovieQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.input}
        onChange={handleMovieQueryChange}
        value={movieQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search your movie"
      />
      <button className={s.btn} type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
