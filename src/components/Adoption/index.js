// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import local
import { slugifyName, getDate, getGender } from 'src/utils';

import './adoption.scss';

// == Component
/**
 * Component to display all the animals available for adoption
 * @param {*} animals List of all the animals
 */
const Adoption = ({
  animals,
  genderFilter,
  speciesFilter,
  genderValue,
  speciesValue,
  racesValue,
  racesFilter,
  racesList,
}) => (
  <main className="adoption">
    <h1>Adoption des animaux</h1>
    <div className="filters">
      <select value={genderValue} onChange={(evt) => genderFilter(evt.target.value)}>
        <option value="0">Tous les genres</option>
        <option value="1">Mâle</option>
        <option value="2">Femelle</option>
      </select>
      <select value={speciesValue} onChange={(evt) => speciesFilter(evt.target.value)}>
        <option value="0">Toutes les espèces</option>
        <option value="1">Chat</option>
        <option value="2">Chien</option>
        <option value="3">NAC</option>
      </select>
      {speciesValue != 3
      && (
        <select value={racesValue} onChange={(evt) => racesFilter(evt.target.value)}>
          <option value="0">Toutes les races</option>
          {racesList.map((race) => (
            <option key={race.id} value={race.id}>{race.name}</option>
          ))}
        </select>
      )}
    </div>
    {animals.length === 0
    && (
      <p>Il n'y a aucun animaux disponibles dans vos critères de recherche..!</p>
    )}
    <div className="cards">
      {animals.map((animal) => (
        <Link
          to={`/animal/${slugifyName(animal.name)}`}
          className="card-link"
          key={animal.id}
        >
          <div className="card">
            <img className="card-image" src={`http://localhost/Projets/PetsWantHomeBack/public/images/${animal.picture}`} alt="" />
            <h3>{animal.name}</h3>
            {animal.race !== '' && <h4>Race : {animal.race}</h4>}
            <h4>Âge : {getDate(animal.birthdate)} ans</h4>
            <h4>Genre : {getGender(animal.gender)}</h4>
          </div>
        </Link>
      ))}
    </div>
  </main>
);

// == PropTypes validation
Adoption.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      race: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      gender: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  genderFilter: PropTypes.func.isRequired,
  speciesFilter: PropTypes.func.isRequired,
  genderValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  speciesValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  racesValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  racesFilter: PropTypes.func.isRequired,
  racesList: PropTypes.array.isRequired,
};

// == Export
export default Adoption;
