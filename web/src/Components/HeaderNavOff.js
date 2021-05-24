import React from "react";
import LogoSearch from '../Assets/logo.png';
import '../Styles/HeaderNav.css';
import {Link} from 'react-router-dom';

function HeaderNavOff() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <img src={LogoSearch} alt="Search Jobs" />
        </nav>
      </header>
    </div>
  );
}

export default HeaderNavOff;
