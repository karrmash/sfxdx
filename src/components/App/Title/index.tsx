import React from 'react';
import './index.sass';

interface ITitle {
    name: string
}

const Title: React.FC<ITitle> = ({ name }) => (
  <div className="title">{name}</div>
);

export default Title;
