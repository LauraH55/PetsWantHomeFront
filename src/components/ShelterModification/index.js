// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useParams } from 'react-router-dom';

import InputField from 'src/components/InputField';

import './shelterModification.scss';

// == Component
/**
 * Component to display the informations of one shelter
 * @param {Array} shelters List of all the shelters
 * @param {String} shelterModificationName Updating shelter name
 * @param {String} shelterModificationAdress Updating shelter address
 * @param {String} shelterModificationCity Updating shelter city
 * @param {String} shelterModificationZip Updating shelter zip code
 * @param {String} shelterModificationPhone Updating shelter phone number
 * @param {String} shelterModificationEmail Updating shelter email
 * @param {Function} loadProfile Function to load the profile informations in the state
 * @param {Function} changeField Function to update the input fields' value
 * @param {Function} submitModification Function to submit the form
 *        and new informations for the shelter
 * @param {Number} shelterUpdateError Number which displays or not the error message
 * @param {Object} errorsArray List of all the errors found during updating the fields
 */
const ShelterModification = ({
  shelters,
  shelterModificationName,
  shelterModificationAdress,
  shelterModificationCity,
  shelterModificationZip,
  shelterModificationPhone,
  shelterModificationEmail,
  loadProfile,
  changeField,
  submitModification,
  shelterUpdateError,
  errorsArray,
  userActualPassword,
  userNewPassword,
  userConfirmPassword,
  passwordStatus,
  changePasswordStatus,
  deleteAccount,
  regError,
  deleteConfirm,
  passwordDelete,
}) => {
  const { idShelter } = useParams();

  const shelter = shelters.find((shel) => shel.id == idShelter);

  useEffect(() => {
    loadProfile(shelter);
  }, []);

  const submitForm = (evt) => {
    evt.preventDefault();
    submitModification();
  };

  if (idShelter !== localStorage.shelterID) {
    return (
      <Redirect to="/error" />
    );
  }

  const closeSuccess = () => {
    localStorage.clear();
    window.location = '/';
  };

  return (
    <div className="shelterModification">
      {regError === 7
      && (
        <div className="overlay">
          <div className="successReg">
            <p>Toutes les informations entrées concernant les animaux seront perdues.</p>
            <p>Cette action est irréversible !</p>
            <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>
            <p>Si vous êtes sûr, entrez votre mot de passe et appyuez sur le bouton "Supprimer mon compte"</p>
            <InputField
              name="passwordDelete"
              type="password"
              label="Veuillez saisir votre mot de passe avant de supprimer votre compte"
              id="passwordDelete"
              value={passwordDelete}
              placeholder="Mot de passe"
              pattern="[a-zA-Z0-9-+!*$@%_]{8,15}"
              manageChange={(value, identifier) => (changeField(value, identifier))}
            />
            {errorsArray.deleteError !== undefined
            && (
              <div className="error">{errorsArray.deleteError}</div>
            )}
            <button type="button" onClick={deleteConfirm}>Supprimer mon compte</button>
          </div>
        </div>
      )}
      {regError === 8
      && (
        <div className="overlay">
          <div className="successReg">
            <p>Votre compte a bien été supprimé ! Nous espérons vous revoir vite parmi nous !</p>
            <button type="button" onClick={closeSuccess}>Fermer ce message</button>
          </div>
        </div>
      )}
      <h1>{shelter.name}</h1>
      <h2>Modification du refuge</h2>
      {shelterUpdateError === 1
      && (
        <h3 className="updateSuccess">Les modifications ont bien été prise en compte.</h3>
      )}
      {shelterUpdateError === 2
      && (
        <h3 className="updateFail">Les modifications n'ont pas été prise en compte.</h3>
      )}
      <form className="modificationForm" onSubmit={submitForm}>
        <InputField
          name="name"
          label="Nom"
          id="shelterModificationName"
          value={shelterModificationName}
          placeholder="Nom du refuge"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.name !== undefined
          && (
            <div className="error">{errorsArray.name}</div>
          )}
        <InputField
          name="address"
          label="Adresse"
          id="shelterModificationAdress"
          value={shelterModificationAdress}
          placeholder="Adresse du refuge"
          pattern="[a-zA-Z0-9éèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.address !== undefined
          && (
            <div className="error">{errorsArray.address}</div>
          )}
        <InputField
          name="zip"
          label="Code postal"
          id="shelterModificationZip"
          value={shelterModificationZip}
          placeholder="Code postal du refuge"
          pattern="[0-9]{5}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.zip !== undefined
          && (
            <div className="error">{errorsArray.zip}</div>
          )}
        <InputField
          name="city"
          label="Ville"
          id="shelterModificationCity"
          value={shelterModificationCity}
          placeholder="Ville du refuge"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.city !== undefined
          && (
            <div className="error">{errorsArray.city}</div>
          )}
        <InputField
          name="phoneNumber"
          label="Numéro de téléphone (au format 0123456789)"
          id="shelterModificationPhone"
          value={shelterModificationPhone}
          placeholder="Numéro de téléphone du refuge"
          pattern="[0-9]{10}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.phoneNumber !== undefined
          && (
            <div className="error">{errorsArray.phoneNumber}</div>
          )}
        <InputField
          name="email"
          type="email"
          label="Email du refuge"
          id="shelterModificationEmail"
          value={shelterModificationEmail}
          placeholder="Adresse Email du refuge"
          pattern="[a-z0-9-.]{1,}@[a-z0-9]{1,}\.[a-z]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.email !== undefined
          && (
            <div className="error">{errorsArray.email}</div>
          )}
        {!passwordStatus
        && (
          <button type="button" className="changePassword" onClick={changePasswordStatus}>Modifier mot de passe</button>
        )}
        {passwordStatus
        && (
          <button type="button" className="changePassword" onClick={changePasswordStatus}>Fermer modification du mot de passe</button>
        )}
        {passwordStatus
        && (
          <>
            <InputField
              name="password"
              type="password"
              label="Mot de passe actuel"
              id="userActualPassword"
              value={userActualPassword}
              placeholder="Mot de passe actuel"
              pattern="[a-zA-Z0-9-+!*$@%_]{8,15}"
              manageChange={(value, identifier) => (changeField(value, identifier))}
            />
            <InputField
              name="newPassword"
              type="password"
              label="Nouveau mot de passe"
              id="userNewPassword"
              value={userNewPassword}
              placeholder="Nouveau mot de passe"
              pattern="[a-zA-Z0-9-+!*$@%_]{8,15}"
              manageChange={(value, identifier) => (changeField(value, identifier))}
            />
            <InputField
              name="confirmPassword"
              type="password"
              label="Confirmation nouveau mot de passe"
              id="userConfirmPassword"
              value={userConfirmPassword}
              placeholder="Confirmation nouveau mot de passe"
              pattern="[a-zA-Z0-9-+!*$@%_]{8,15}"
              manageChange={(value, identifier) => (changeField(value, identifier))}
            />
            {errorsArray.password !== undefined
            && (
              <div className="error">{errorsArray.password}</div>
            )}
          </>
        )}
        <InputField
          name="picture"
          label="Photo du refuge"
          id="shelterModificationPicture"
          type="file"
          value=""
          accept="image/*"
          placeholder="Photo du refuge"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.picture !== undefined
          && (
            <div className="error">{errorsArray.picture}</div>
          )}
        <button type="submit" className="saveChanges">
          Enregistrer
        </button>
      </form>
      {shelterUpdateError === 1
      && (
        <h3 className="updateSuccess">Les modifications ont bien été prise en compte.</h3>
      )}
      {shelterUpdateError === 2
      && (
        <h3 className="updateFail">Les modifications n'ont pas été prise en compte.</h3>
      )}
      <div className="back-delete">
        <Link to={`/shelter/${idShelter}`} className="backLink">
          <button type="button" className="backList">
            Retour à la liste
          </button>
        </Link>
        <button type="button" className="deleteAccount" onClick={deleteAccount}>
          Se désinscrire
        </button>
      </div>
    </div>
  );
};

// == PropTypes validation
ShelterModification.propTypes = {
  shelters: PropTypes.array.isRequired,
  shelterModificationName: PropTypes.string.isRequired,
  shelterModificationAdress: PropTypes.string.isRequired,
  shelterModificationCity: PropTypes.string.isRequired,
  shelterModificationZip: PropTypes.string.isRequired,
  shelterModificationPhone: PropTypes.string.isRequired,
  shelterModificationEmail: PropTypes.string.isRequired,
  loadProfile: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  submitModification: PropTypes.func.isRequired,
  shelterUpdateError: PropTypes.number.isRequired,
  errorsArray: PropTypes.object.isRequired,
  userActualPassword: PropTypes.string.isRequired,
  userNewPassword: PropTypes.string.isRequired,
  userConfirmPassword: PropTypes.string.isRequired,
  passwordStatus: PropTypes.bool.isRequired,
  changePasswordStatus: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  regError: PropTypes.number.isRequired,
  deleteConfirm: PropTypes.func.isRequired,
  passwordDelete: PropTypes.string.isRequired,
};

// == Export
export default ShelterModification;
