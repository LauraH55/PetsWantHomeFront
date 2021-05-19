// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import local
import RegisterShelterField from './RegisterShelterField';

import './registershelter.scss';

// == Component
/**
 * Component to display the registration form of a new shelter
 * @param {String} email Email of the new shelter
 * @param {String} name Name of the new shelter
 * @param {String} address Address of the new shelter
 * @param {String} city City of the new shelter
 * @param {String} zip Zip code of the new shelter
 * @param {String} phoneNumber Phone number of the new shelter
 * @param {Function} changeField Function to update the input fields' value
 * @param {Function} handleLogin Function to log in the actual user
 *        so he can have access to the shelter profile
 */
const RegisterShelter = ({
  email,
  name,
  address,
  city,
  zip,
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
          placeholder="Adresse"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={address}
        />
        <RegisterShelterField
          name="zip"
          placeholder="Code postal"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={zip}
        />
        <RegisterShelterField
          name="city"
          placeholder="Ville du refuge"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={city}
        />
        <RegisterShelterField
          name="phone_number"
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
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  /** value for the email */
  phoneNumber: PropTypes.string.isRequired,
};

// == Export
export default RegisterShelter;
