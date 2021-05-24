import React from "react";
import LogoSearch from '../Assets/logo.png';
import '../Styles/HeaderNav.css';
import {Link} from 'react-router-dom';

function HeaderNavOff() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/"><img src={LogoSearch} alt="Search Jobs" /></Link>
        </nav>
      </header>
    </div>
  );
}

export default HeaderNavOff;
