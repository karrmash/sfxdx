import React from 'react';
import './index.sass';

const Loader: React.FC = () => {
  const arrayCount = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container_loader">
      <div className="sk-chase">
        {
            arrayCount.map((elem) => <div key={elem} className="sk-chase-dot" />)
        }
      </div>
      <div className="text_loader">Идёт загрузка данных</div>
    </div>
  );
};

export default Loader;
