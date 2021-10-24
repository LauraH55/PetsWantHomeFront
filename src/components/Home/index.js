/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import { slugifyName } from 'src/utils';

import './home.scss';
import paw from '../../assets/images/nextPaw2.png';
import minipaw from '../../assets/images/PawSign.png';

// == Component
/**
 * Component of the home page
 * @param {Array} randomAnimals List of random animals to display on the page
 */
const Home = ({
  randomAnimals,
}) => {
  const closeSuccess = () => {
    localStorage.removeItem('regError');
    window.location = '/';
  };

  return (
    <main className="home">
      <div className="banner">
        <h1 className="title">Pets Want Home</h1>
      </div>
      {localStorage.regError == 1
      && (
        <div className="overlay">
          <div className="successReg">
            <p>Votre inscription s'est correctement déroulée, vous êtes désormais connecté !</p>
            <button type="button" onClick={closeSuccess}>Fermer ce message</button>
          </div>
        </div>
      )}
      {/* {localStorage.regError == 2
      && (
        <div className="overlay">
          <div className="successReg">
            <p>Votre compte a bien été supprimé ! Nous espérons vous revoir vite parmi nous !</p>
            <button type="button" onClick={closeSuccess}>Fermer ce message</button>
          </div>
        </div>
      )} */}
      <h3 className="description">
        Le site Pets Want Home a été pensé et créé pour les refuges d’animaux afin de leur proposer un outil pour une gestion simplifiée des avis d’adoptions de leurs pensionnaires.
        En centralisant les avis d’adoptions des refuges, nous souhaitons également simplifier la recherche des pensionnaires pour les particuliers souhaitant en adopter.
        Le site aspire à de nombreuses améliorations et sera de ce fait régulièrement mis à jour.
        <img className="description-image" src={minipaw} alt="mini patoune" />
      </h3>
      <h2 className="subtitle">Quelques animaux disponibles à l'adoption</h2>
      <div className="thumbnails">
        {randomAnimals.map((animal) => (
          <Link
            to={`/animal/${slugifyName(animal.name)}`}
            className="thumbnails-link"
            key={animal.id}
          >
            <img className="thumbnails-image" src={`http://localhost/Projets/PetsWantHomeBack/public/images/${animal.picture}`} alt="#" />
          </Link>
        ))}

        <Link
          to="/adoption"
          className="thumbnails-link"
        >
          <img className="thumbnails-image" src={paw} alt="#" />
        </Link>
      </div>
    </main>
  );
};

// == PropTypes validation
Home.propTypes = {
  randomAnimals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Home;
