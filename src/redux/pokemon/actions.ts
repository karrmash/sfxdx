import { GET_DATA_ABILITIES, GET_DATA_POKEMON, GET_LIST_POKEMON } from './types';
import { sortList } from '../../helpers';
import {
  hideError, hideLoader, showError, showLoader,
} from '../app/actions';

/**
 * Очищает ошибки и показывает загрузкик. Используется перед обращением в АПИ.
 */
export function startAction() {
  return (dispatch: any) => {
    dispatch(hideError());
    dispatch(showLoader());
  };
}

/**
 * Скрывает загрузчик. Используется после успешного ответа от АПИ.
 * Специально сделана задержка, чтобы можно было красиво увидеть загрузчик.
 * @param limit
 */
export function finishAction(limit: number) {
  return (dispatch: any) => {
    setTimeout(() => { dispatch(hideLoader()); }, limit);
  };
}

/**
 * Показывает ошибку. Используется в случае ошибки при работе с АПИ.
 * @param text
 * @param limit
 */
export function errorAction(text:string, limit: number) {
  return (dispatch: any) => {
    dispatch(showError(text));
    setTimeout(() => { dispatch(hideLoader()); }, limit);
  };
}

/**
 * Получает список покемонов (20 элементов)
 */
export function getListPokemon() {
  return async (dispatch: any) => {
    try {
      dispatch(startAction());
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
      const json = await response.json();
      const result = sortList(json.results);
      dispatch({ type: GET_LIST_POKEMON, payload: result });
      dispatch(finishAction(1000));
    } catch (e) {
      dispatch(errorAction('Ошибка получения данных', 1000));
    }
  };
}

/**
 * Получает данные по конкретному покемону.
 * @param name
 */
export function getDataPokemon(name: string) {
  return async (dispatch: any) => {
    try {
      dispatch(startAction());
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const json = await response.json();
      dispatch({ type: GET_DATA_POKEMON, payload: json });
      dispatch(finishAction(1000));
    } catch (e) {
      dispatch(errorAction('Ошибка получения данных', 1000));
    }
  };
}

/**
 * Получает данные по конкретной способности
 * @param abilities
 */
export function getDataAbilities(abilities: string) {
  return async (dispatch: any) => {
    try {
      dispatch(startAction());
      const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilities}`);
      const json = await response.json();
      dispatch({ type: GET_DATA_ABILITIES, payload: json });
      dispatch(finishAction(1000));
    } catch (e) {
      dispatch(errorAction('Ошибка получения данных', 1000));
    }
  };
}
