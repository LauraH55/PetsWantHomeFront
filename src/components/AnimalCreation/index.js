// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

import InputField from 'src/components/InputField';

import './animalCreation.scss';

// == Component
/**
 * Component to update the informations of one animal
 * @param {Function} saveCreationAnimal Function to save the updates of the animal
 * @param {Function} changeField Function to update the input fields' value
 * @param {String} animalModificationName Name of the animal
 * @param {String} animalModificationBirthdate Birthdate of the animal
 * @param {String/Number} animalModificationStatus Adoption status of the animal
 * @param {String/Number} animalModificationGender Gender of the animal
 * @param {String/Number} animalModificationSpecies Species of the animal
 * @param {String/Number} animalModificationRace Race of the animal
 * @param {String/Boolean} animalModificationCatCohabitation Cohabitation possibility with cats
 * @param {String/Boolean} animalModificationChildCohabitation Cohabitation possibility with child
 * @param {String/Boolean} animalModificationDogCohabitation Cohabitation possibility with dogs
 * @param {String/Boolean} animalModificationNacCohabitation Cohabitation possibility with NACs
 * @param {String/Boolean} animalModificationUnknownCohabitation Unknow Cohabitation possibility
 * @param {String} animalModificationdescription Description of the animal
 * @param {Number} creationStatus Status to display success/error message
 * @param {Array} racesList List of all the animals races
 * @param {Object} errorsArray List of all the errors found during creating the profile
 */
const AnimalCreation = ({
  saveCreationAnimal,
  changeField,
  animalModificationName,
  animalModificationBirthdate,
  animalModificationStatus,
  animalModificationGender,
  animalModificationSpecies,
  animalModificationRace,
  animalModificationCatCohabitation,
  animalModificationChildCohabitation,
  animalModificationDogCohabitation,
  animalModificationNacCohabitation,
  animalModificationUnknownCohabitation,
  animalModificationdescription,
  creationStatus,
  racesList,
  sheltersList,
  errorsArray,
}) => {
  const { idShelter } = useParams();

  if (idShelter !== localStorage.shelterID) {
    return (
      <Redirect to="/error" />
    );
  }

  const submitForm = (evt) => {
    evt.preventDefault();
    saveCreationAnimal();
  };

  const backToList = () => {
    window.location = `/animals-modification/shelter/${idShelter}`;
  };

  const racesToDisplay = racesList.filter((race) => race.species.id == animalModificationSpecies);

  const shelterName = sheltersList.find((shelter) => shelter.id == idShelter);

  return (
    <div className="animalCreation">
      <h1>{shelterName.name}</h1>
      <h2>Création d'un nouvel animal</h2>
      {creationStatus === 1
      && (
        <h3 className="updateSuccess">La création du profil de {animalModificationName} a bien été effectuée</h3>
      )}
      {creationStatus === 2
      && (
        <h3 className="updateFail">Il y a eu une erreur lors de la création du profil de {animalModificationName === '' ? 'l\'animal' : animalModificationName}</h3>
      )}
      <form className="AnimalModificationForm" onSubmit={submitForm}>
        <InputField
          name="name"
          label="Nom"
          id="animalModificationName"
          value={animalModificationName}
          placeholder="Nom de l'animal"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        {errorsArray.name !== undefined
          && (
            <div className="error">{errorsArray.name}</div>
          )}
        <div className="field field-birthdate">
          <label htmlFor="animalModificationBirthdate">Date de naissance :
            <input
              id="animalModificationBirthdate"
              type="date"
              value={animalModificationBirthdate}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationBirthdate'))}
            />
          </label>
        </div>
        <div className="field field-adopted">
          <p>L'animal est :</p>
          <label htmlFor="adoptedAnimal">
            <input
              id="adoptedAnimal"
              type="radio"
              name="adoptionStatus"
              value="1"
              checked={animalModificationStatus == 1}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationStatus'))}
            />
            A adopter
          </label>
          <label htmlFor="animaltoAdopt">
            <input
              id="animaltoAdopt"
              type="radio"
              name="adoptionStatus"
              value="2"
              checked={animalModificationStatus == 2}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationStatus'))}
            />
            Adopté/e
          </label>
          {errorsArray.status !== undefined
          && (
            <div className="error">{errorsArray.status}</div>
          )}
        </div>
        <div className="field field-gender">
          <p>Genre :</p>
          <label htmlFor="genderMale">
            <input
              id="genderMale"
              type="radio"
              name="genderStatus"
              value="1"
              checked={animalModificationGender == 1}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationGender'))}
            />
            Mâle
          </label>
          <label htmlFor="genderFemale">
            <input
              id="genderFemale"
              type="radio"
              name="genderStatus"
              value="2"
              checked={animalModificationGender == 2}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationGender'))}
            />
            Femelle
          </label>
          {errorsArray.gender !== undefined
          && (
            <div className="error">{errorsArray.gender}</div>
          )}
        </div>
        <div className="field field-species">
          <p>Expèce :</p>
          <label htmlFor="speciesCat">
            <input
              id="speciesCat"
              type="radio"
              name="speciesStatus"
              value="1"
              checked={animalModificationSpecies == 1}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationSpecies'))}
            />
            Chat
          </label>
          <label htmlFor="speciesDog">
            <input
              id="speciesDog"
              type="radio"
              name="speciesStatus"
              value="2"
              checked={animalModificationSpecies == 2}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationSpecies'))}
            />
            Chien
          </label>
          <label htmlFor="speciesNac">
            <input
              id="speciesNac"
              type="radio"
              name="speciesStatus"
              value="3"
              checked={animalModificationSpecies == 3}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationSpecies'))}
            />
            NAC
          </label>
          {errorsArray.species !== undefined
          && (
            <div className="error">{errorsArray.species}</div>
          )}
        </div>
        {animalModificationSpecies != 3
        && (
          <div className="field field-race">
            <label htmlFor="animalModificationRace">Race :
              <select
                id="animalModificationRace"
                value={animalModificationRace}
                onChange={(evt) => (changeField(evt.target.value, 'animalModificationRace'))}
              >
                <option value="">- Sélectionnez -</option>
                <option value="0">Non Connue</option>
                {racesToDisplay.map((race) => (
                  <option key={race.id} value={race.id}>
                    {race.name}
                  </option>
                ))}
              </select>
            </label>
            {errorsArray.race !== undefined
            && (
              <div className="error">{errorsArray.race}</div>
            )}
          </div>
        )}
        <div className="field field-cohabitation">
          <p>L'animal s'entend bien avec :</p>
          <label htmlFor="animalModificationCatCohabitation">
            <input
              type="checkbox"
              id="animalModificationCatCohabitation"
              name="animalModificationCatCohabitation"
              checked={animalModificationCatCohabitation}
              onChange={(evt) => (changeField(evt.target.checked, 'animalModificationCatCohabitation'))}
            />
            Chats
          </label>
          <label htmlFor="animalModificationDogCohabitation">
            <input
              type="checkbox"
              id="animalModificationDogCohabitation"
              name="animalModificationDogCohabitation"
              checked={animalModificationDogCohabitation}
              onChange={(evt) => (changeField(evt.target.checked, 'animalModificationDogCohabitation'))}
            />
            Chiens
          </label>
          <label htmlFor="animalModificationNacCohabitation">
            <input
              type="checkbox"
              id="animalModificationNacCohabitation"
              name="animalModificationNacCohabitation"
              checked={animalModificationNacCohabitation}
              onChange={(evt) => (changeField(evt.target.checked, 'animalModificationNacCohabitation'))}
            />
            NACs
          </label>
          <label htmlFor="animalModificationChildCohabitation">
            <input
              type="checkbox"
              id="animalModificationChildCohabitation"
              name="animalModificationChildCohabitation"
              checked={animalModificationChildCohabitation}
              onChange={(evt) => (changeField(evt.target.checked, 'animalModificationChildCohabitation'))}
            />
            Enfants
          </label>
          <label htmlFor="animalModificationUnknownCohabitation">
            <input
              type="checkbox"
              id="animalModificationUnknownCohabitation"
              name="animalModificationUnknownCohabitation"
              checked={animalModificationUnknownCohabitation}
              onChange={(evt) => (changeField(evt.target.checked, 'animalModificationUnknownCohabitation'))}
            />
            Non Testé / Ne sais pas
          </label>
          {errorsArray.cohabitation !== undefined
          && (
            <div className="error">{errorsArray.cohabitation}</div>
          )}
        </div>
        <div className="field field-bio">
          <label htmlFor="animalModificationdescription">Description de l'animal :
            <textarea
              id="animalModificationdescription"
              value={animalModificationdescription}
              placeholder="Description de l'animal"
              spellCheck=""
              required
              pattern="[a-zA-Z0-9éèêàçëöïäùô \':!?.;,&-]{1,}"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationdescription'))}
            />
          </label>
          {errorsArray.description !== undefined
          && (
            <div className="error">{errorsArray.description}</div>
          )}
        </div>
        <div className="field field-picture">
          <label htmlFor="animalModificationPicture">Photo de l'animal :
            <input
              id="animalModificationPicture"
              type="file"
              accept="image/*"
              required
              onChange={(evt) => (changeField(evt.target.files[0], 'animalModificationPicture'))}
            />
          </label>
          {errorsArray.picture !== undefined
          && (
            <div className="error">{errorsArray.picture}</div>
          )}
        </div>
        <button type="button" onClick={saveCreationAnimal}>Enregistrer</button>
      </form>
      {creationStatus === 1
      && (
        <h3 className="updateSuccess">La création du profil de {animalModificationName} a bien été effectuée</h3>
      )}
      {creationStatus === 2
      && (
        <h3 className="updateFail">Il y a eu une erreur lors de la création du profil de {animalModificationName === '' ? 'l\'animal' : animalModificationName}</h3>
      )}
      <div className="backToList">
        <button type="button" onClick={backToList}>Retour à la liste</button>
      </div>
    </div>
  );
};

// == PropTypes validation
AnimalCreation.propTypes = {
  saveCreationAnimal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  animalModificationName: PropTypes.string.isRequired,
  animalModificationBirthdate: PropTypes.string.isRequired,
  animalModificationStatus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  animalModificationGender: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  animalModificationSpecies: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  animalModificationRace: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  animalModificationCatCohabitation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  animalModificationChildCohabitation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  animalModificationDogCohabitation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  animalModificationNacCohabitation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  animalModificationUnknownCohabitation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  animalModificationdescription: PropTypes.string.isRequired,
  creationStatus: PropTypes.number.isRequired,
  racesList: PropTypes.array.isRequired,
  sheltersList: PropTypes.array.isRequired,
  errorsArray: PropTypes.object.isRequired,
};

// == Export
export default AnimalCreation;
