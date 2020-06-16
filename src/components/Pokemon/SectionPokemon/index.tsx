import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IDataPokemon } from '../../../interface/interfacePokemon';
import { IReducer } from '../../../interface/interfaceReducer';
import { getDataPokemon } from '../../../redux/pokemon/actions';
import ListParameterPokemon from '../ListParameterPokemon';
import ListAbilities from '../ListAbilities';
import { Loader, Error, Title } from '../../App';
import CardPokemon from '../CardPokemon';
import './index.sass';

const SectionPokemon: React.FC<RouteComponentProps> = ({ match }) => {
  const { name }: any = match.params;
  const dispatch = useDispatch();
  const data:IDataPokemon = useSelector((state:IReducer) => state.pokemon.data);
  const isLoader = useSelector((state: IReducer) => state.app.isLoader);
  const error = useSelector((state: IReducer) => state.app.error);

  useEffect(() => { dispatch(getDataPokemon(name)); }, [dispatch, name]);

  if (isLoader) return <Loader />;

  if (error.flag) return <Error text={error.message} />;

  const { abilities = [], sprites = { front_default: null } } = data;

  return (
    <>
      <Title name={`Покемон: ${name}`} />
      <div className="section">
        <div className="section_ico">
          <CardPokemon name={name} img={sprites.front_default} />
        </div>

        <div className="parameters">
          <div className="subtitle">Базовые характеристики</div>
          {
              Object.entries(data).map(([key, value]) => (
                <ListParameterPokemon
                  key={key}
                  name={key}
                  value={value}
                />
              ))
          }
          <div className="subtitle">Список способностей</div>
          <ListAbilities abilities={abilities} />
        </div>

      </div>
    </>
  );
};

export default withRouter(SectionPokemon);
