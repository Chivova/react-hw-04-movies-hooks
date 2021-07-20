import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import Navigation from './components/Navigation';
import HomePage from './views/HomePage/HomePage';
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
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
