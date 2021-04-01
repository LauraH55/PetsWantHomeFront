import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import './nav.scss';
import Logo from '../../assets/images/B&W-Logo-PWH.png';


const Nav = ({ handleLogout, isLogged }) => {
  const token = localStorage.token;
  return(
  <nav className="nav">
    <div className="menu--link--mobile">
      <Menu {...Nav}>
        <ul>
          <NavLink
            to="/"
            className="menu-item"
            activeClassName="nav-item--active"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/adoption"
            className="menu-item"
            activeClassName="nav-item--active"
          >
            Adoptions
          </NavLink>
          <NavLink
            to="/login"
            className="menu-item"
            activeClassName="nav-item--active"
            exact
          >
            Connexion
          </NavLink>
          <NavLink
            to="/register"
            className="menu-item"
            activeClassName="nav-item--active"
          >
            Inscription
          </NavLink>
        </ul>
      </Menu>
      <img src={Logo} alt="logo" className="logo-mobile" />
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
      </ul>
    </div>
    <div className="menu-login">
      
        {token && (
          <>
          {localStorage.getItem('shelterID') === null
          && (
            <NavLink
            to="/admin/shelter/create"
            className="nav-item"
            activeClassName="nav-item--active"
            >
              <button
                type="button"
                className="nav-button"
              >
                Inscrivez votre refuge
              </button>
            </NavLink>
          )}
            
            <button
              type="button"
              className="nav-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </>
        )}

        {!token && (
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
        )}
      
    </div>
  </nav>
  );
};

Nav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool.isRequired,
  /** message displayed when "connected" */
};

// Nav.defaultProps = {
//   isLogged: false,
// };

export default Nav;
