// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import './shelterModification.scss';

// == Component
/**
 * Component to display the informations of one shelter
 * @param {Array} shelters List of all the shelters
 * @param {String} shelterModificationName Updating shelter name
 * @param {String} shelterModificationAdress Updating shelter address
 * @param {String} shelterModificationPhone Updating shelter phone number
 * @param {String} shelterModificationEmail Updating shelter email
 * @param {Function} loadProfile Function to load the profile informations in the state
 * @param {Function} changeField Function to update the input fields' value
 * @param {Function} submitModification Function to submit the form
 *        and new informations for the shelter
 */
const ShelterModification = ({
  shelters,
  shelterModificationName,
  shelterModificationAdress,
  shelterModificationPhone,
  shelterModificationEmail,
  loadProfile,
  changeField,
  submitModification,
}) => {
  const { idShelter } = useParams();

  // eslint-disable-next-line eqeqeq
  const shelter = shelters.find((shel) => shel.id == idShelter);

  useEffect(() => {
    loadProfile(shelter);
  }, []);

  const submitForm = (evt) => {
    evt.preventDefault();
    submitModification();
  };

  return (
    <div className="shelterModification">
      <h1>{shelter.name}</h1>
      <h2>Modification du refuge</h2>
      <form className="modificationForm" onSubmit={submitForm}>
        <div className="field field-name">
          <label htmlFor="shelterModificationName">Nom :
            <input
              id="shelterModificationName"
              type="text"
              value={shelterModificationName}
              placeholder="Nom du refuge"
              onChange={(evt) => (changeField(evt.target.value, 'shelterModificationName'))}
            />
          </label>
        </div>
        <div className="field field-adress">
          <label htmlFor="shelterModificationAdress">Adresse :
            <input
              id="shelterModificationAdress"
              type="text"
              value={shelterModificationAdress}
              placeholder="Adresse du refuge"
              onChange={(evt) => (changeField(evt.target.value, 'shelterModificationAdress'))}
            />
          </label>
        </div>
        <div className="field field-phoneNumber">
          <label htmlFor="shelterModificationPhone">Numéro de téléphone :
            <input
              id="shelterModificationPhone"
              type="text"
              value={shelterModificationPhone}
              placeholder="Numéro de téléphone"
              onChange={(evt) => (changeField(evt.target.value, 'shelterModificationPhone'))}
            />
          </label>
        </div>
        <div className="field field-email">
          <label htmlFor="shelterModificationEmail">Email du refuge :
            <input
              id="shelterModificationEmail"
              type="text"
              value={shelterModificationEmail}
              placeholder="Adresse Email"
              onChange={(evt) => (changeField(evt.target.value, 'shelterModificationEmail'))}
            />
          </label>
        </div>
        <div className="field field-picture">
          <label htmlFor="shelterModificationPicture">Photo du refuge :
            <input
              id="shelterModificationPicture"
              type="file"
              placeholder="Photo du refuge"
              onChange={(evt) => (changeField(evt.target.files[0], 'shelterModificationPicture'))}
            />
          </label>
        </div>
        <button type="submit" className="saveChanges">
          Enregistrer
        </button>
      </form>
      <Link to={`/shelter/${idShelter}`} className="backLink">
        <button type="button" className="backList">
          Retour à la liste
        </button>
      </Link>
    </div>
  );
};

// == PropTypes validation
ShelterModification.propTypes = {
  shelters: PropTypes.array.isRequired,
  shelterModificationName: PropTypes.string.isRequired,
  shelterModificationAdress: PropTypes.string.isRequired,
  shelterModificationPhone: PropTypes.string.isRequired,
  shelterModificationEmail: PropTypes.string.isRequired,
  loadProfile: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  submitModification: PropTypes.func.isRequired,
};

// == Export
export default ShelterModification;
