import React from 'react';
import './index.sass';

interface IError {
    text: string
}

const Error: React.FC<IError> = ({ text }) => (
  <div className="container_error">
    <div className="error">
      {text}
    </div>
  </div>
);

export default Error;
