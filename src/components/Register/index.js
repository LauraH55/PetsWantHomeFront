import React from 'react';
import PropTypes from 'prop-types';

import RegisterField from './RegisterField';

import './register.scss';

const Register = ({
  email,
  password,
  shelter,
  confirmPassword,
  address,
  phoneNumber,
  picture,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <RegisterField
            name="shelter"
            placeholder="Nom du refuge"
            manageChange={changeField}
            value={shelter}
          />
          <RegisterField
            name="address"
            type="address"
            placeholder="Adresse du refuge"
            manageChange={changeField}
            value={address}
          />
          <RegisterField
            name="phoneNumber"
            type="phoneNumber"
            placeholder="Numéro de téléphone"
            manageChange={changeField}
            value={phoneNumber}
          />
          <RegisterField
            name="picture"
            type="picture"
            placeholder="Photo du refuge"
            manageChange={changeField}
            value={picture}
          />
          <RegisterField
            name="email"
            placeholder="Adresse Email"
            manageChange={changeField}
            value={email}
          />
          <RegisterField
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
          />
          <RegisterField
            name="confirmPassword"
            type="confirmPassword"
            placeholder="Confirmation du mot de passe"
            manageChange={changeField}
            value={confirmPassword}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            Valider
          </button>
        </form>
    </div>
  );
};

Register.propTypes = {
  /** value for the email */
  //email: PropTypes.string.isRequired,
  /** value for the password */
  //password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  //changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  //handleLogin: PropTypes.func.isRequired,
  /** called when the "Déconnexion" button is clicked */
  //handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  //isLogged: PropTypes.bool,
  /** message displayed when "connected" */
  //loggedMessage: PropTypes.string,
};

Register.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Register;
