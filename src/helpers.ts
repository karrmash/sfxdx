import { IElementPokemon } from './interface/interfacePokemon';

// Сортировка по алфавиту
// Ниже описал короткую запись. Использовал более большую запись из-за перевода в нижний регистр
// arr.sort((a:IElementPokemon, b:IElementPokemon) =>
// (a.name > b.name && 1) || (a.name < b.name && -1) || 0)

export const sortList = (arr: []) => (
  arr.sort((a: IElementPokemon, b: IElementPokemon) => {
    const first = a.name.toLowerCase();
    const second = b.name.toLowerCase();

    if (first > second) {
      return 1;
    }
    return first < second ? -1 : 0;
  })
);

// Тасование Фишера — Йетса.
export const sortRandomList = (arr: string[]) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};
