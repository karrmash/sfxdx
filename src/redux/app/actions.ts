import {
  HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER,
} from './types';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showError(text:string) {
  return {
    type: SHOW_ERROR,
    payload: text,
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}
