import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './pages/main';
import PokemonPage from './pages/pokemon';
import AbilitiesPage from './pages/abilities';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/pokemon/:name" component={PokemonPage} />
    <Route exact path="/abilities/:abilities" component={AbilitiesPage} />
    <Redirect to="/" />
  </Switch>
);

export default App;
