import {
  HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER,
} from './types';
import { IAppReducer } from '../../interface/interfaceReducer';

const initialState:IAppReducer = {
  isLoader: false,
  error: {
    flag: false,
    message: '',
  },
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoader: true };
    case HIDE_LOADER:
      return { ...state, isLoader: false };
    case SHOW_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          flag: true,
          message: action.payload,
        },
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          flag: false,
          message: '',
        },
      };
    default: return state;
  }
};

export default appReducer;
