import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import pokemonReducer from './pokemon/pokemonReducer';

const reducer = combineReducers({
  app: appReducer,
  pokemon: pokemonReducer,
});

export default reducer;
