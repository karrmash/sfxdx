import React from 'react';
import './index.sass';

const Loader: React.FC = () => (
  <div className="container_loader">
    <div className="sk-chase">
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
    <div className="text_loader">Идёт загрузка данных</div>
  </div>

);

export default Loader;
