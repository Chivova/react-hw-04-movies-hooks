import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Container from './components/Container';
import Navigation from './components/Navigation';
// import HomePage from './views/HomePage/HomePage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage';

import './App.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "homepage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <Loader type="Watch" color="#00BFFF" height={50} width={50} />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
