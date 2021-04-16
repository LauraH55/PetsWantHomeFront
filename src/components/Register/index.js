import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import RegisterField from './RegisterField';

import './register.scss';

const Register = ({
  email,
  password,
  confirmPassword,
  changeField,
  handleLogin,
  emailError,
  passwordError,
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
        <p>Minimum 8 caractères, dont au moins un chiffre, une majuscule et un symbole</p>
        <RegisterField
          name="confirmPassword"
          type="password"
          placeholder="Confirmation du mot de passe"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={confirmPassword}
        />
        {emailError
          && (
            <div className="error"> Cette adresse e-mail est déjà utilisée !</div>
          )}
        {passwordError
          && (
            <div className="error">Mot de passe incorrect !</div>
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
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
};

// == Export
export default Register;
