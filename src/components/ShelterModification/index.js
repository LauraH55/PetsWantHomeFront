// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

// == Import local
import { slugifyName } from 'src/utils';

import './shelterModification.scss';

// == Component
/**
 * Component to display the informations of one shelter
 * @param {Array} shelters List of all the shelters
 */
const ShelterModification = ({
  shelters,
}) => {
  const { idShelter } = useParams();

  // eslint-disable-next-line eqeqeq
  const shelter = shelters.find((shel) => shel.id == idShelter);

  return (
    <div className="shelterModification">
      <h1>{shelter.name}</h1>
      <h2>Modification du refuge</h2>
      <form className="modificationForm">
        <div className="field field-name">
          <label htmlFor="shelterName">Nom :
            <input
              id="shelterName"
              type="text"
              value={shelter.name}
            />
          </label>
        </div>
        <div className="field field-adress">
          <label htmlFor="shelterAdress">Adresse :
            <input
              id="shelterAdress"
              type="text"
              value={shelter.address}
            />
          </label>
        </div>
        <div className="field field-phoneNumber">
          <label htmlFor="shelterPhone">Numéro de téléphone :
            <input
              id="shelterPhone"
              type="text"
              value={shelter.phoneNumber}
            />
          </label>
        </div>
        <div className="field field-email">
          <label htmlFor="shelterEmail">Email du refuge :
            <input
              id="shelterEmail"
              type="text"
              value={shelter.email}
            />
          </label>
        </div>
        <div className="field field-picture">
          <label htmlFor="shelterPicture">Photo du refuge :
            <input
              id="shelterPicture"
              type="file"
            />
          </label>
        </div>
        <button type="button" className="saveChanges">
          Enregistrer
        </button>
      </form>
      <Link to={`/shelter/${idShelter}`} className="backLink">
        <button type="button" className="backList">
          Retour à la liste
        </button>
      </Link>
    </div>
  );
};

// == PropTypes validation
ShelterModification.propTypes = {
  shelters: PropTypes.array.isRequired,
};

// == Export
export default ShelterModification;
