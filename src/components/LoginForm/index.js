import React from 'react';
import PropTypes from 'prop-types';

import LoginField from './LoginField';

import './loginform.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  loginError,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="loginfield-form">
        <form autoComplete="off" className="loginfield-form-element" onSubmit={handleSubmit}>
          <LoginField
            name="email"
            placeholder="Adresse Email"
            manageChange={changeField}
            value={email}
          />
          <LoginField
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
          />
          {loginError
          && (
            <div className="login-error">Chat alors, vous vous êtes trompés d'identifiants !</div>
          )}
          <button
            type="submit"
            className="loginfield-form-button"
          >
            Connexion
          </button>
        </form>
    </div>
  );
};

LoginForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  /** called when the "Déconnexion" button is clicked */
  //handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
  /** message displayed when "connected" */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
