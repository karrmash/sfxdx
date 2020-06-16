import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './index.sass';

interface PropsBack extends RouteComponentProps {
    readonly title: string // Заголовок
    readonly url?: string // Url-адрес, куда необходимо перейти
}

const Back: React.FC<PropsBack> = ({ title, url = '', history }) => {
  const OnClick = () => {
    if (url === '') {
      history.goBack();
    } else {
      history.push(url);
    }
  };

  return (
    <div
      className="back"
      title={title}
      onClick={() => { OnClick(); }}
    >
      {title}
    </div>
  );
};

export default withRouter(Back);
