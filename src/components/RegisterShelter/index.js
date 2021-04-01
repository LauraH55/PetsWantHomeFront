import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import RegisterShelterField from './RegisterShelterField';

import './registershelter.scss';

const RegisterShelter = ({
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
    <Redirect to="/" />
  };

  return (
    <div className="register-shelter-form">
        <form autoComplete="off" className="register-shelter-form-element" onSubmit={handleSubmit}>
          <h1 className="register-shelter-form-title">Inscription</h1>
          <RegisterShelterField
            name="shelter"
            placeholder="Nom"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={shelter}
          />
          <RegisterShelterField
            name="address"
            type="address"
            placeholder="Adresse"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={address}
          />
          <RegisterShelterField
            name="phoneNumber"
            type="phoneNumber"
            placeholder="Numéro de téléphone"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={phoneNumber}
          />
          <RegisterShelterField
            name="picture"
            type="file"
            placeholder="Photo du refuge"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={picture}
          />
          <RegisterShelterField
            name="email"
            type="email"
            placeholder="Adresse Email"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={email}
          />
          <RegisterShelterField
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={password}
          />
          <RegisterShelterField
            name="confirmPassword"
            type="password"
            placeholder="Confirmation du mot de passe"
            manageChange={(value, identifier) => (changeField(value, identifier))}
            value={confirmPassword}
          />
          <button
            type="submit"
            className="register-shelter-form-button"
          >
            Valider
          </button>
        </form>
    </div>
  );
};

RegisterShelter.propTypes = {
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

};


export default RegisterShelter;
