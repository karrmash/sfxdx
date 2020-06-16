import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IReducer } from '../../../interface/interfaceReducer';

import { IElementPokemon } from '../../../interface/interfacePokemon';
import { getListPokemon } from '../../../redux/pokemon/actions';
import { Loader, Error } from '../../App';
import CardPokemon from '../CardPokemon';
import './index.sass';

const ListPokemon:React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const list = useSelector((state: IReducer) => state.pokemon.list);
  const isLoader = useSelector((state: IReducer) => state.app.isLoader);
  const error = useSelector((state: IReducer) => state.app.error);

  useEffect(() => { dispatch(getListPokemon()); }, [dispatch]);

  if (isLoader) return <Loader />;

  if (error.flag) return <Error text={error.message} />;

  return (
    <div className="list">
      {
                list.map((elem:IElementPokemon) => (
                  <CardPokemon
                    name={elem.name}
                    key={elem.name}
                    hover
                    OnClick={() => { history.push(`/pokemon/${elem.name}`); }}
                  />
                ))
            }
    </div>
  );
};

export default withRouter(ListPokemon);
