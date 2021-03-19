import React from 'react';

import './nav.scss';
import Logo from '../../assets/img/B&W-Logo-PWH.png';

const Nav = () => (
  <nav className="nav">
    <div className="menu_link">
      <img src={Logo} alt="logo" />
      <ul>
        <li>Accueil</li>
        <li>Adoptions</li>
        <li>Refuges</li>
      </ul>
    </div>
    <div className="menu_login">
      <ul>
        <li>Connexion</li>
        <li>Inscription</li>
      </ul>
    </div>
  </nav>
);

export default Nav;
