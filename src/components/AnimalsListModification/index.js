// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import { getGender, getBirthdateDate } from 'src/utils';

import './animalsListModification.scss';

// == Component
/**
 * Component for the Back-Office of the app which handle the list of all the actual animals
 * of a shelter to update their informations
 * @param {Array} animalsList List of all the animals to display the animals
 * @param {Array} sheltersList List of all the shelters to get the actual one
 */
const AnimalsListModification = ({
  animalsList,
  sheltersList,
  archiveAnimal,
  desarchiveAnimal,
}) => {
  const { idShelter } = useParams();

  const adoptingAnimals = animalsList.filter((animal) => animal.shelter.id == idShelter
    && animal.status === 1);
  const adoptedAnimals = animalsList.filter((animal) => animal.shelter.id == idShelter
    && animal.status === 2);

  const actualShelter = sheltersList.find((shelter) => shelter.id == idShelter);

  const archive = (evt) => {
    archiveAnimal(evt.target.value);
  };

  const desarchive = (evt) => {
    desarchiveAnimal(evt.target.value);
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
              <td>
                <Link to={`/animal/modification/${animal.id}/${idShelter}`}>
                  <button type="button" className="updateAnimal">Modifier</button>
                </Link>
                <button type="button" className="archiveAnimal" onClick={archive} value={animal.id}>Archiver</button>
              </td>
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
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {adoptedAnimals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.name}</td>
              <td>{getGender(animal.gender)}</td>
              <td>{getBirthdateDate(animal.birthdate)}</td>
              <td>{animal.race === null ? '' : animal.race.name}</td>
              <td>
                <Link to={`/animal/modification/${animal.id}/${idShelter}`}>
                  <button type="button" className="updateAnimal">Modifier</button>
                </Link>
                <button type="button" className="archiveAnimal" onClick={desarchive} value={animal.id}>Desarchiver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  archiveAnimal: PropTypes.func.isRequired,
  desarchiveAnimal: PropTypes.func.isRequired,
};

// == Export
export default AnimalsListModification;
