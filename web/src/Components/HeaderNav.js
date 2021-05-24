import React from 'react'
import LogoSearch from '../Assets/logo.png';

import {Link} from 'react-router-dom';
import '../Styles/HeaderNav.css';

function HeaderNav() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/"><img src={LogoSearch} alt="Search Jobs" /></Link>
        <Link to="/login" className="button">Entrar</Link>
      </nav>
    </header>
  )
}

export default HeaderNav
