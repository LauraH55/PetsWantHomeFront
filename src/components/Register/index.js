// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import local
import RegisterField from './RegisterField';

import './register.scss';

// == Component
/**
 * Component to display the registration form of a new user
 * @param {String} email Email of the new user
 * @param {String} password Password of the new user
 * @param {String} confirmPassword Confirmation password of the new user
 * @param {Function} changeField Function to update the input fields' value
 * @param {Function} handleLogin Function to log in the new user after registration
 * @param {Number} regError Number of the error message to display
 */
const Register = ({
  email,
  password,
  confirmPassword,
  changeField,
  handleLogin,
  regError,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
      <Redirect to="/" />;
  };

  return (
    <div className="register-form">
      <form autoComplete="off" className="register-form-element" onSubmit={handleSubmit}>
        <h1 className="register-form-title">Inscription</h1>
        <RegisterField
          name="email"
          type="email"
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
        <p>Minimum 8 caractères, dont au moins :</p>
        <ul>
          <li>une lettre minuscule</li>
          <li>une lettre Majuscule</li>
          <li>un chiffre</li>
          <li>un caractère spécial parmi -+!*$@%</li>
        </ul>
        <RegisterField
          name="confirmPassword"
          type="password"
          placeholder="Confirmation du mot de passe"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={confirmPassword}
        />
        {regError === 2
          && (
            <div className="error">Format de l'adresse e-mail invalide !</div>
          )}
        {regError === 3
          && (
            <div className="error">Format du mot de passe, ou confirmation, incorrect !</div>
          )}
        {regError === 4
          && (
            <div className="error">Format de l'e-mail et du mot de passe, ou confirmation, invalides !</div>
          )}
        {regError === 5
          && (
            <div className="error"> Cette adresse e-mail est déjà utilisée !</div>
          )}
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

// == PropTypes validation
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

  handleLogin: PropTypes.func.isRequired,

  confirmPassword: PropTypes.string.isRequired,
  regError: PropTypes.number.isRequired,
};

// == Export
export default Register;
