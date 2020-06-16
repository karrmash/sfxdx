import React from 'react';
import Back from '../components/App/Back';
import SectionAbilities from '../components/Pokemon/SectionAbilities';

const AbilitiesPage: React.FC = () => (
  <div className="container column max_width_800">
    <div className="navigation">
      <Back title="Вернуться на предыдущую страницу" />
    </div>
    <SectionAbilities />
  </div>
);

export default AbilitiesPage;
