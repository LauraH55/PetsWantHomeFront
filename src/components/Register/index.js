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
    <div className="register-form">
        <form autoComplete="off" className="register-form-element" onSubmit={handleSubmit}>
          <RegisterField
            name="shelter"
            placeholder="Nom du refuge"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={shelter}
          />
          <RegisterField
            name="address"
            type="address"
            placeholder="Adresse du refuge"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={address}
          />
          <RegisterField
            name="phoneNumber"
            type="phoneNumber"
            placeholder="Numéro de téléphone"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={phoneNumber}
          />
          <RegisterField
            name="picture"
            type="picture"
            placeholder="Photo du refuge"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={picture}
          />
          <RegisterField
            name="email"
            placeholder="Adresse Email"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={email}
          />
          <RegisterField
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={password}
          />
          <RegisterField
            name="confirmPassword"
            type="confirmPassword"
            placeholder="Confirmation du mot de passe"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={confirmPassword}
          />
          <button
            type="submit"
            className="register-form-button"
          >
            Valider
          </button>
        </form>
    </div>
  );
};

Register.propTypes = {
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
    /** value for the email */
  shelter: PropTypes.string.isRequired,
  /** value for the email */
  confirmPassword: PropTypes.string.isRequired,
  /** value for the email */
  address: PropTypes.string.isRequired,
  /** value for the email */
  phoneNumber: PropTypes.string.isRequired,
  /** value for the email */
  picture: PropTypes.string.isRequired,

  /** called when the "Déconnexion" button is clicked */
  // handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  // isLogged: PropTypes.bool,
  /** message displayed when "connected" */
  // loggedMessage: PropTypes.string,
};

Register.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Register;
