import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import './nav.scss';
import Logo from '../../assets/images/B&W-Logo-PWH.png';


const Nav = ({ handleLogout }) => {
  return(
  <nav className="nav">
    <div className="nav-mobile">
      <Menu {...Nav}>
        <ul>
          <NavLink
            to="/"
            className="nav-mobile-link"
          >
            Accueil
          </NavLink>
          <NavLink
            to="/adoption"
            className="nav-mobile-link"
          >
            Adoptions
          </NavLink>
          {localStorage.token && (
          <>
          {localStorage.shelterID === undefined
          && (
            <NavLink
            to="/admin/shelter/create"
            className="nav-mobile-link"
            >
              Inscrivez votre refuge
            </NavLink>
          )}
           
          {localStorage.shelterID > 0
          && (
            <NavLink
            to={`/shelter/${(localStorage.shelterID)}`}
            className="nav-mobile-link"
            >
                Profil du refuge
            </NavLink>
          )}

            <NavLink
              to=""
              className="nav-mobile-link"
              onClick={handleLogout}
            >
              Déconnexion
            </NavLink>
          </>
        )}

        {!localStorage.token && (
          <>
            <NavLink
              to="/login"
              className="nav-mobile-link"
            >
              Connexion
            </NavLink>
            <NavLink
              to="/register"
              className="nav-mobile-link"
            >
              Inscription
            </NavLink>
            </>
        )}
        </ul>
      </Menu>
      <img src={Logo} alt="logo" className="logo-mobile" />
    </div>

    <div className="nav-link">
      <img src={Logo} alt="logo" />
      <ul>
        <NavLink
          to="/"
          className="nav-item"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/adoption"
          className="nav-item"
        >
          Adoptions
        </NavLink>
      </ul>
    </div>
    <div className="nav-login">
      
        {localStorage.token && (
          <>
          {localStorage.shelterID === undefined
          && (
            <NavLink
            to="/admin/shelter/create"
            className="nav-item"
            >
              <button
                type="button"
                className="nav-button"
              >
                Inscrivez votre refuge
              </button>
            </NavLink>
          )}
           
          {localStorage.shelterID > 0
          && (
            <NavLink
            to={`/shelter/${(localStorage.shelterID)}`}
            className="nav-item"
            >
              <button
                type="button"
                className="nav-button"
              >
                Profil du refuge
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

        {!localStorage.token && (
          <ul>
            <NavLink
              to="/login"
              className="nav-item"
            >
              Connexion
            </NavLink>
            <NavLink
              to="/register"
              className="nav-item"
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



export default Nav;
