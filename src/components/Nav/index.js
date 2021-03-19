import React from 'react';

import './nav.scss';
import Logo from '../../assets/img/B&W-Logo-PWH.png';

const Nav = () => (
  <nav className="nav">
    <div className="menu_link">
      <img src={Logo} alt="logo" />
      <ul>
        <li>ACCUEUIL</li>
        <li>ADOPTIONS</li>
        <li>REFUGES</li>
      </ul>
    </div>
    <div className="menu_login">
      <ul>
        <li>CONNEXION</li>
        <li>INSCRIPTION</li>
      </ul>
    </div>
  </nav>
);

export default Nav;
