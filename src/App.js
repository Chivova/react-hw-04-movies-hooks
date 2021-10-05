import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Container from './components/Container';
import Navigation from './components/Navigation';
// import HomePage from './views/HomePage/HomePage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage';

import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
      <Suspense
        fallback={
          <Loader type="Oval" color="rgb(139, 0, 0)" height={100} width={100} />
        }
      >
        <Navigation />

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
