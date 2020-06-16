import React from 'react';
import SectionPokemon from '../components/Pokemon/SectionPokemon';
import Back from '../components/App/Back';

const PokemonPage: React.FC = () => (
  <div className="container column max_width_800">
    <div className="navigation">
      <Back title="Вернуться на главную" url="/" />
    </div>
    <SectionPokemon />
  </div>
);

export default PokemonPage;
