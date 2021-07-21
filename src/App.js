import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import Navigation from './components/Navigation';
import HomePage from './views/HomePage/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';

import './App.css';

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
