import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { IReducer } from '../../../interface/interfaceReducer';
import { IDataAbilities } from '../../../interface/interfacePokemon';
import { getDataAbilities } from '../../../redux/pokemon/actions';
import { Loader, Title, Error } from '../../App';
import './index.sass';

const SectionAbilities: React.FC<RouteComponentProps> = ({ match }) => {
  const { abilities }: any = match.params;
  const dispatch = useDispatch();
  const data:IDataAbilities = useSelector((state: IReducer) => state.pokemon.abilities);
  const isLoader = useSelector((state: IReducer) => state.app.isLoader);
  const error = useSelector((state: IReducer) => state.app.error);

  useEffect(() => { dispatch(getDataAbilities(abilities)); }, [dispatch, abilities]);

  if (isLoader) return <Loader />;

  if (error.flag) return <Error text={error.message} />;

  // eslint-disable-next-line camelcase
  const { effect_entries = [], pokemon = [] } = data;

  const dataEffect = () => effect_entries.filter((elem) => elem.language.name === 'en').map((elem) => (
    <Fragment key={elem.language.name}>
      <div className="line">
        <div className="name_ab">Эффект способности:</div>
        <div className="value_ab">{elem.effect}</div>
      </div>
      <div className="line">
        <div className="name_ab">Краткосрочный эффект:</div>
        <div className="value_ab">{elem.short_effect}</div>
      </div>
    </Fragment>
  ));

  const listPokemon = () => pokemon.map((elem) => (
    <Link
      key={elem.pokemon.name}
      className="link"
      title={elem.pokemon.name}
      to={`/pokemon/${elem.pokemon.name}`}
    >
      {elem.pokemon.name}
    </Link>
  ));

  return (
    <>
      <Title name={`Способность: ${data.name}`} />
      {dataEffect()}
      <div className="subtitle" title="Список покемонов, которые обладают данной способностью">Список покемонов</div>
      <div className="container_list_pokemon">
        {listPokemon()}
      </div>

    </>
  );
};

export default withRouter(SectionAbilities);
