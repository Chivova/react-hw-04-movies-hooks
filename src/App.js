import './App.css';

// import moviesApi from './api/movies-api';
// import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';

function App() {
  // const [movies, setMovies] = useState(null);

  // useEffect(() => {
  //   moviesApi.fetchTrendingMovies().then(setMovies);
  // }, []);
  // console.log(movies);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
