import { GET_DATA_ABILITIES, GET_DATA_POKEMON, GET_LIST_POKEMON } from './types';

import { IPokemonReducer } from '../../interface/interfaceReducer';
import { IDataAbilities, IDataPokemon } from '../../interface/interfacePokemon';

const initialState:IPokemonReducer = {
  list: [],
  data: {} as IDataPokemon,
  abilities: {} as IDataAbilities,
};

const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LIST_POKEMON:
      return { ...state, list: action.payload };
    case GET_DATA_POKEMON:
      return { ...state, data: action.payload };
    case GET_DATA_ABILITIES:
      return { ...state, abilities: action.payload };
    default: return state;
  }
};

export default pokemonReducer;
