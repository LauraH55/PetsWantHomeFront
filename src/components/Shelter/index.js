// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

// == Import local
import { slugifyName } from 'src/utils';

import './shelter.scss';

// == Component
/**
 * Component to display the informations of one shelter
 * @param {Array} shelters List of all the shelters
 */
const Shelter = ({
  shelters,
}) => {
  const { idShelter } = useParams();

  // eslint-disable-next-line eqeqeq
  console.log(shelters);
  const shelter = shelters.find((shel) => shel.id == idShelter);

  const animalsShelter = shelter.animals;

  return (
    <div className="shelter">
      <div>
        <div className="shelter-info">
          <img className="shelter-image" src={`http://localhost/Projets/PetsWantHomeBack/public/images/${shelter.picture}`} alt="#" />
          <div>
            <div className="shelter-characteristics">
              <h1>{shelter.name}</h1>
              <h3><span>Adresse :</span> {shelter.address} {shelter.zip} {shelter.city}</h3>
              <h3><span>Téléphone :</span> {shelter.phoneNumber}</h3>
              <h3><span>Email :</span> {shelter.email}</h3>
            </div>
            {localStorage.shelterID === idShelter && (
              <div>
                <Link to={`/shelter/modification/${idShelter}`}>
                  <button className="shelter-button" type="button">
                    Modifier le profil
                  </button>
                </Link>
                {/* <a href="http://localhost/Projets/PetsWantHomeBack/public/back/shelter/update">
                  <button className="shelter-button" type="button">
                    Modifier le profil
                  </button>
                </a> */}
                {/* <a href="http://localhost/Projets/PetsWantHomeBack/public/back/myshelter/">
                  <button className="shelter-button" type="button">
                    Gestion des animaux
                  </button>
                </a> */}
                <Link to={`/animals-modification/shelter/${idShelter}`}>
                  <button className="shelter-button" type="button">
                    Gestion des animaux
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="shelter-animals">
          {animalsShelter.map((animal) => (
            <Link
              to={`/animal/${slugifyName(animal.name)}`}
              className=""
              key={animal.id}
            >
              <img className="shelter-animals-image" src={`http://localhost/Projets/PetsWantHomeBack/public/images/${animal.picture}`} alt="#" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// == PropTypes validation
Shelter.propTypes = {
  shelters: PropTypes.array.isRequired,
};

// == Export
export default Shelter;
