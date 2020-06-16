import React from 'react';
import { Link } from 'react-router-dom';
import { sortRandomList } from '../../../helpers';
import './index.sass';
import { IListAbilities } from '../../../interface/interfacePokemon';

const ListAbilities: React.FC<IListAbilities> = ({ abilities = [] }) => {
  let array:string[] = abilities.map((elem) => elem.ability.name);
  array = sortRandomList(array);
  return (
    <>
      {array.map((elem) => (
        <Link
          className="link"
          to={`/abilities/${elem}`}
          key={elem}
          title={elem}
        >
          {elem}
        </Link>
      ))}
    </>
  );
};

export default ListAbilities;
