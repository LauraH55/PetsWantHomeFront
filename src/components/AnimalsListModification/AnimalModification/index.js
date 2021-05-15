// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import './animalModification.scss';

// == Component
/**

 */
const AnimalModification = ({
  saveUpdateAnimal,
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
  animalModificationPicture,
}) => {
  const submitForm = (evt) => {
    evt.preventDefault();
    saveUpdateAnimal();
  };

  console.log(animalModificationName);
  console.log(animalModificationBirthdate);
  console.log(animalModificationStatus);
  console.log(animalModificationGender);
  console.log(animalModificationSpecies);
  console.log(animalModificationRace);
  console.log(animalModificationCatCohabitation);
  console.log(animalModificationChildCohabitation);
  console.log(animalModificationDogCohabitation);
  console.log(animalModificationNacCohabitation);
  console.log(animalModificationUnknownCohabitation);
  console.log(animalModificationdescription);
  console.log(animalModificationPicture);

  const change = (evt) => {
    console.log(evt.target.checked);
  };

  return (
    <div className="animalModification">
      <h2>Modification de XXX</h2>
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
        <div className="field field-name">
          <label htmlFor="animalModificationBirthdate">Date de naissance :
            <input
              id="animalModificationBirthdate"
              type="date"
              value={animalModificationBirthdate}
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationBirthdate'))}
            />
          </label>
        </div>
        {/* <div className="field field-name">
          <label htmlFor="animalModificationStatus">L'animal est :
            <input
              id="animalModificationStatus"
              type="radio"
              value={animalModificationStatus}
              placeholder="Nom de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationStatus'))}
            />
          </label>
        </div> */}
        {/* <div className="field field-name">
          <label htmlFor="animalModificationGender">Genre :
            <input
              id="animalModificationGender"
              type="text"
              value={animalModificationGender}
              placeholder="Nom de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationGender'))}
            />
          </label>
        </div> */}
        {/* <div className="field field-name">
          <label htmlFor="animalModificationSpecies">Expèce :
            <input
              id="animalModificationSpecies"
              type="text"
              value={animalModificationSpecies}
              placeholder="Nom de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationSpecies'))}
            />
          </label>
        </div> */}
        {/* <div className="field field-name">
          <label htmlFor="animalModificationRace">Race :
            <input
              id="animalModificationRace"
              type="text"
              value={animalModificationRace}
              placeholder="Nom de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationRace'))}
            />
          </label>
        </div> */}
        <div className="field field-name">
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
        <div className="field field-name">
          <label htmlFor="animalModificationdescription">Description de l'animal :
            <input
              id="animalModificationdescription"
              type="text"
              value={animalModificationdescription}
              placeholder="Description de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationdescription'))}
            />
          </label>
        </div>
        {/* <div className="field field-name">
          <label htmlFor="animalModificationPicture">Photo de l'animal :
            <input
              id="animalModificationPicture"
              type="text"
              value={animalModificationPicture}
              placeholder="Nom de l'animal"
              onChange={(evt) => (changeField(evt.target.value, 'animalModificationPicture'))}
            />
          </label>
        </div> */}
        <button type="button" onClick={saveUpdateAnimal}>Enregistrer</button>
      </form>
    </div>
  );
};

// == PropTypes validation
AnimalModification.propTypes = {
  saveUpdateAnimal: PropTypes.func.isRequired,
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
  animalModificationPicture: PropTypes.string.isRequired,
};

// == Export
export default AnimalModification;
