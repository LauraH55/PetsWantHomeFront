// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import local
import RegisterShelterField from './RegisterShelterField';

import './registershelter.scss';

// == Component
const RegisterShelter = ({
  email,
  name,
  address,
  phoneNumber,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
      <Redirect to="/" />;
  };

  return (
    <div className="register-shelter-form">
      <form autoComplete="off" className="register-shelter-form-element" onSubmit={handleSubmit}>
        <h1 className="register-shelter-form-title">Inscription du refuge</h1>
        <RegisterShelterField
          name="name"
          placeholder="Nom"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={name}
        />
        <RegisterShelterField
          name="address"
          type="address"
          placeholder="Adresse"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={address}
        />
        <RegisterShelterField
          name="phone_number"
          type="phone_number"
          placeholder="Numéro de téléphone"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={phoneNumber}
        />
        <RegisterShelterField
          name="email"
          type="email"
          placeholder="Adresse Email"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={email}
        />
        <RegisterShelterField
          name="picture"
          type="file"
          placeholder="Photo du refuge"
          manageChange={(value, identifier) => (changeField(value, identifier))}
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

// == PropTypes validation
RegisterShelter.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  address: PropTypes.string.isRequired,
  /** value for the email */
  phoneNumber: PropTypes.string.isRequired,
};

// == Export
export default RegisterShelter;
