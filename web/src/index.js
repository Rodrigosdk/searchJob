import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/global.css';
import Router from './Router/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);
