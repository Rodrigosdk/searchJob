import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
import Login from './components/login';
import Register from './components/register';

ReactDOM.render(
  <React.StrictMode>
    
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);
