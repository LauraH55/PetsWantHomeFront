// == Import npm
import React, { useEffect } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import { getGender, getBirthdateDate } from 'src/utils';
import AnimalModification from 'src/containers/AnimalsListModification/AnimalModification';

import './animalsListModification.scss';

// == Component
/**

 */
const AnimalsListModification = ({
  animalsList,
  sheltersList,
  updateAnimal,
  modificationStatus,
}) => {
  const { idShelter } = useParams();

  const adoptingAnimals = animalsList.filter((animal) => animal.shelter.id == idShelter
    && animal.status === 1);
  const adoptedAnimals = animalsList.filter((animal) => animal.shelter.id == idShelter
    && animal.status === 2);

  const actualShelter = sheltersList.find((shelter) => shelter.id == idShelter);

  const updatingAnimal = (evt) => {
    const animalToUpdate = animalsList.find((animal) => animal.id == evt.target.value);
    console.log(animalToUpdate);
    updateAnimal(animalToUpdate);
  };

  return (
    <div className="animalsListModification">
      <h1>{actualShelter.name}</h1>
      <h2>Animaux à adopter</h2>
      <table className="adopting-animals-list">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Genre</th>
            <th>Date de naissance</th>
            <th>Race</th>
            <th><button type="button" className="addAnimal">Ajouter un animal</button></th>
          </tr>
        </thead>
        <tbody>
          {adoptingAnimals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.name}</td>
              <td>{getGender(animal.gender)}</td>
              <td>{getBirthdateDate(animal.birthdate)}</td>
              <td>{animal.race === null ? '' : animal.race.name}</td>
              <td><button type="button" className="updateAnimal" onClick={updatingAnimal} value={animal.id}>Modifier</button><button type="button" className="archiveAnimal">Archiver</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Animaux adoptés</h2>
      <table className="adopted-animals-list">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Genre</th>
            <th>Date de naissance</th>
            <th>Race</th>
            <th><button type="button" className="addAnimal">Ajouter un animal</button></th>
          </tr>
        </thead>
        <tbody>
          {adoptedAnimals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.name}</td>
              <td>{getGender(animal.gender)}</td>
              <td>{getBirthdateDate(animal.birthdate)}</td>
              <td>{animal.race === null ? '' : animal.race.name}</td>
              <td><button type="button" className="updateAnimal" onClick={updatingAnimal} value={animal.id}>Modifier</button><button type="button" className="archiveAnimal">Archiver</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="overlay" style={{ display: `${modificationStatus ? 'block' : 'none'}` }}>
        <AnimalModification />
      </div>
    </div>
  );
};

// == PropTypes validation
AnimalsListModification.propTypes = {
  animalsList: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
  sheltersList: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
  updateAnimal: PropTypes.func.isRequired,
  modificationStatus: PropTypes.bool.isRequired,
};

// == Export
export default AnimalsListModification;
