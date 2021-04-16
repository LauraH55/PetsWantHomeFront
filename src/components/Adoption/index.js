// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import local
import { slugifyName, getDate, getGender } from 'src/utils';

import './adoption.scss';

// == Composant
const Adoption = ({ animals }) => (
  <main className="adoption">
    <h1>Adoption des animaux</h1>
    <div className="cards">
      {animals.map((animal) => (
        <Link
        to={`/animal/${slugifyName(animal.name)}`}
        className="card-link"
        key={animal.id}
        >
        <div className="card">
          <img className="card-image" src={"http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/images/" + animal.picture} alt="" />
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
};

// == Export
export default Adoption;
