// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import { getAnimalBySlug, getDate, getGender, getCohabitation } from 'src/utils';

import './animal.scss';
import minipaw from '../../assets/images/paw-bullet.png';

// == Composant
const Animal = ({ animals }) => {
  const { slug } = useParams();
  const animal = getAnimalBySlug(slug, animals);
  console.log(animal);

  return (
    <div className="animal">
      <img className="animal-image" src={"http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/images/" + animal.picture} alt="#" />
      <div className="animal-aside">
        <h3 className="animal-name">{animal.name}</h3>
        <div className="animal-shelter">
          <p className="animal-shelter-published">Publié le 24/03/2021 par</p>
          <Link
            to={`/shelter/${(animal.shelter.id)}`}
            className="animal-shelter-link"
          >
            <h1>{animal.shelter !== null ? animal.shelter.name : 'Pas de refuge'}</h1>
          </Link>
          
        </div>
        <div className="animal-info">
          <p><span>Espèce :</span> {animal.species.name}</p>
          {animal.race && <p><span>Race :</span> {animal.race.name}</p>}
          <p><span>Âge :</span> {getDate(animal.birthdate)} ans</p>
          <p><span>Genre :</span> {getGender(animal.gender)}</p>
          <p><span>S'entend bien avec : </span></p>
          
          {animal.catCohabitation
          && (
            <p><img className="animal-bullet" src={minipaw} alt="Liste à puce en forme de patte" /> Chats</p>
          )}

          {animal.dogCohabitation
          && (
            <p><img className="animal-bullet" src={minipaw} alt="Liste à puce en forme de patte" /> Chiens</p>
          )}

          {animal.nacCohabitation
          && (
            <p><img className="animal-bullet" src={minipaw} alt="Liste à puce en forme de patte" /> NAC</p>
          )}

          {animal.childCohabitation
          && (
            <p><img className="animal-bullet" src={minipaw} alt="Liste à puce en forme de patte" /> Enfants</p>
          )}

          {animal.unknownCohabitation
          && (
            <p><img className="animal-bullet" src={minipaw} alt="Liste à puce en forme de patte" /> Non testé / Ne sait pas</p>
          )}
          <p className="animal-description">{animal.description}</p>
        </div>
      </div>
    </div>
  );
};

// == PropTypes validation
Animal.propTypes = {
  animals: PropTypes.array.isRequired,
};

// == Export
export default Animal;
