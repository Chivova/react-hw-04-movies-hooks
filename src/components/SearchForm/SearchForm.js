import { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [movieQuery, setMovieQuery] = useState('');

  const handleMovieQueryChange = e => {
    const { value } = e.target;
    setMovieQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieQuery.trim() === '') {
      return;
    }
    onSubmit(movieQuery);
    setMovieQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleMovieQueryChange}
        value={movieQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search your movie"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
