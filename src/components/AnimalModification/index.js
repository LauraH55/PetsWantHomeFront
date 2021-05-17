// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './animalModification.scss';

// == Component
/**
 * Component to update the informations of one animal
 * @param {Function} saveUpdateAnimal Function to save the updates of the animal
 * @param {Function} changeField Function to update the input fields' value
 * @param {String} actualName Actual name of the animal
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
 * @param {String} animalModificationPicture Picture of the animal
 * @param {Array} animalsList List of all the animals
 * @param {Function} updateAnimal Function to set the informations of the actual animal in the form
 * @param {Number} modificationStatus Status to display success/error message
 * @param {Array} racesList List of all the animals races
 */
const AnimalModification = ({
  saveUpdateAnimal,
  changeField,
  actualName,
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
  animalModificationPicture,
  animalsList,
  updateAnimal,
  modificationStatus,
  racesList,
}) => {
  const { idAnimal, idShelter } = useParams();
  let animalToUpdate = animalsList.find((animal) => animal.id == idAnimal);

  console.log(animalToUpdate);

  if (animalToUpdate.species.id == 3) {
    animalToUpdate = {
      ...animalToUpdate,
      race: {
        id: 0,
      },
    };
  }

  useEffect(() => {
    updateAnimal(animalToUpdate);
  }, []);

  const submitForm = (evt) => {
    evt.preventDefault();
    saveUpdateAnimal();
  };

  const backToList = () => {
    window.location = `/animals-modification/shelter/${idShelter}`;
  };

  const racesToDisplay = racesList.filter((race) => race.species.id == animalModificationSpecies);

  return (
    <div className="animalModification">
      <h1>{actualName}</h1>
      <h2>Modification de {actualName}</h2>
      {modificationStatus === 1
      && (
        <h3 className="updateSuccess">Les modifications ont bien été prise en compte</h3>
      )}
      {modificationStatus === 2
      && (
        <h3 className="updateFail">Les modifications n'ont pas été prise en compte</h3>
      )}
      <form className="AnimalModificationForm" onSubmit={submitForm}>
        <div className="field field-name">
          <label htmlFor="animalModificationName">Nom :
            <input
              id="animalModificationName"
              type="text"
              value={animalModificationName}
              placeholder="Nom de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationName'))}
            />
          </label>
        </div>
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
                <option value="0">- Sélectionnez -</option>
                {racesToDisplay.map((race) => (
                  <option key={race.id} value={race.id}>
                    {race.name}
                  </option>
                ))}
              </select>
            </label>
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
        </div>
        <div className="field field-bio">
          <label htmlFor="animalModificationdescription">Description de l'animal :
            <textarea
              id="animalModificationdescription"
              value={animalModificationdescription}
              placeholder="Description de l'animal"
              spellCheck=""
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationdescription'))}
            />
          </label>
        </div>
        <div className="field field-picture">
          <label htmlFor="animalModificationPicture">Photo de l'animal :
            <input
              id="animalModificationPicture"
              type="file"
              accept="image/*"
              onChange={(evt) => (changeField(evt.target.files[0], 'animalModificationPicture'))}
            />
          </label>
        </div>
        <div className="picture">
          <img className="shelter-image" src={`http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/images/${animalModificationPicture}`} alt="#" />
        </div>
        <button type="button" onClick={saveUpdateAnimal}>Enregistrer</button>
      </form>
      {modificationStatus === 1
      && (
        <h3 className="updateSuccess">Les modifications ont bien été prise en compte</h3>
      )}
      {modificationStatus === 2
      && (
        <h3 className="updateFail">Les modifications n'ont pas été prise en compte</h3>
      )}
      <div className="backToList">
        <button type="button" onClick={backToList}>Retour à la liste</button>
      </div>
    </div>
  );
};

// == PropTypes validation
AnimalModification.propTypes = {
  saveUpdateAnimal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  actualName: PropTypes.string.isRequired,
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
  animalModificationPicture: PropTypes.string.isRequired,
  animalsList: PropTypes.array.isRequired,
  updateAnimal: PropTypes.func.isRequired,
  modificationStatus: PropTypes.number.isRequired,
  racesList: PropTypes.array.isRequired,
};

// == Export
export default AnimalModification;
