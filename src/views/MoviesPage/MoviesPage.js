import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm';
export default function MoviesPage({ movieQuery }) {
  const [query, setQuery] = useState('');
  return <SearchForm></SearchForm>;
}
