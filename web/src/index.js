import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
import Login from './components/login';
import Register from './components/register';
import Main from './pages/main';

ReactDOM.render(
  <React.StrictMode>
  
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
