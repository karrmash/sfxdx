import React from 'react';
import './index.sass';

interface IListParameterPokemon {
    name: string
    value: any
}

interface ITypes {
    type: {
        name: string
    }
}

const arrayAbilities: {key:string, name:string}[] = [
  { key: 'height', name: 'Высота' },
  { key: 'weight', name: 'Вес' },
  { key: 'base_experience', name: 'Базовый опыт' },
  { key: 'order', name: 'Заказ' },
  { key: 'types', name: 'Типы' },
];

const ListParameterPokemon: React.FC<IListParameterPokemon> = ({ name, value }) => {
  for (let i = 0; i < arrayAbilities.length; i += 1) {
    const elem = arrayAbilities[i];
    if (elem.key === name) {
      let valueAbilities = value;
      if (name === 'types') valueAbilities = value.map((element: ITypes) => element.type.name).join(', ');

      return (
        <div className="line" key={name} title={`${elem.name}: ${valueAbilities}`}>
          <div className="name">
            {elem.name}
            :
          </div>
          <div className="value">{valueAbilities}</div>
        </div>
      );
    }
  }

  return null;
};

export default ListParameterPokemon;
