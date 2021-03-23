import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

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
          <Field
            name="shelter"
            placeholder="Nom du refuge"
            manageChange={changeField}
            value={shelter}
          />
          <Field
            name="address"
            type="address"
            placeholder="Adresse"
            manageChange={changeField}
            value={address}
          />
          <Field
            name="phoneNumber"
            type="phoneNumber"
            placeholder="Numéro de téléphone"
            manageChange={changeField}
            value={phoneNumber}
          />
          <Field
            name="picture"
            type="picture"
            placeholder="Photo du refuge"
            manageChange={changeField}
            value={picture}
          />
          <Field
            name="email"
            placeholder="Adresse Email"
            manageChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
          />
          <Field
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
