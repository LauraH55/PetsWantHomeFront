import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';
import Logo from '../../assets/img/B&W-Logo-PWH.png';

const Nav = () => (
  <nav className="nav">
    <img src={Logo} alt="logo" className="logo-mobile" />
    <div className="menu-login--mobile">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="menu-link">
      <img src={Logo} alt="logo" />
      <ul>
        <NavLink
          to="/"
          className="nav-item"
          activeClassName="nav-item--active"
          exact
          >
            Accueil
        </NavLink>
        <NavLink
          to="/adoption"
          className="nav-item"
          activeClassName="nav-item--active"
          >
            Adoptions
        </NavLink>
        {/* <NavLink
        to="/shelters"
        className="nav-item"
        activeClassName="nav-item--active"
        >
          Refuges
        </NavLink> */}
      </ul>
    </div>
    <div className="menu-login">
      <ul>
        <NavLink
          to="/login"
          className="nav-item"
          activeClassName="nav-item--active"
          exact
          >
            Connexion
        </NavLink>
        <NavLink
          to="/register"
          className="nav-item"
          activeClassName="nav-item--active"
          >
            Inscription
        </NavLink>
      </ul>
    </div>
  </nav>
);

export default Nav;
