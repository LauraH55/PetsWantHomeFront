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
 * @param {Number} shelterUpdateError Number which displays or not the error message
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
  shelterUpdateError,
  errorsArray,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
      <Redirect to="/" />;
  };

  return (
    <div className="register-shelter-form">
      <h1 className="register-shelter-form-title">Inscription du refuge</h1>
      {shelterUpdateError === 1
      && (
        <h3 className="updateSuccess">La création du refuge a bien été prise en compte. Vous allez être redirigé automatiquement.</h3>
      )}
      {shelterUpdateError === 2
      && (
        <h3 className="updateFail">La création du refuge n'a pas été prise en compte.</h3>
      )}
      <form autoComplete="off" className="register-shelter-form-element" onSubmit={handleSubmit}>
        <RegisterShelterField
          name="name"
          placeholder="Nom"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={name}
          required="true"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
        />
        {errorsArray.name !== undefined
          && (
            <div className="error">{errorsArray.name}</div>
          )}
        <RegisterShelterField
          name="address"
          placeholder="Adresse"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={address}
          required="true"
          pattern="[a-zA-Z0-9éèàçêîïëôù\-' ]{1,}"
        />
        {errorsArray.address !== undefined
          && (
            <div className="error">{errorsArray.address}</div>
          )}
        <RegisterShelterField
          name="zip"
          placeholder="Code postal"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={zip}
          required="true"
          pattern="[0-9]{5}"
        />
        {errorsArray.zip !== undefined
          && (
            <div className="error">{errorsArray.zip}</div>
          )}
        <RegisterShelterField
          name="city"
          placeholder="Ville du refuge"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={city}
          required="true"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
        />
        {errorsArray.city !== undefined
          && (
            <div className="error">{errorsArray.city}</div>
          )}
        <RegisterShelterField
          name="phone_number"
          placeholder="Numéro de téléphone"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={phoneNumber}
          required="true"
          pattern="[0-9]{10}"
        />
        {errorsArray.phoneNumber !== undefined
          && (
            <div className="error">{errorsArray.phoneNumber}</div>
          )}
        <RegisterShelterField
          name="email"
          type="email"
          placeholder="Adresse Email"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          value={email}
          required="true"
          pattern="[a-z0-9-.]{1,}@[a-z0-9]{1,}\.[a-z]{1,}"
        />
        {errorsArray.email !== undefined
          && (
            <div className="error">{errorsArray.email}</div>
          )}
        <RegisterShelterField
          name="picture"
          type="file"
          placeholder="Photo du refuge"
          accept="image/*"
          manageChange={(value, identifier) => (changeField(value, identifier))}
          required="true"
        />
        {errorsArray.picture !== undefined
          && (
            <div className="error">{errorsArray.picture}</div>
          )}
        <button
          type="submit"
          className="register-shelter-form-button"
        >
          Valider
        </button>
      </form>
      {shelterUpdateError === 1
      && (
        <h3 className="updateSuccess">La création du refuge a bien été prise en compte. Vous allez être redirigé automatiquement.</h3>
      )}
      {shelterUpdateError === 2
      && (
        <h3 className="updateFail">La création du refuge n'a pas été prise en compte.</h3>
      )}
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
  shelterUpdateError: PropTypes.number.isRequired,
  errorsArray: PropTypes.object.isRequired,
};

// == Export
export default RegisterShelter;
