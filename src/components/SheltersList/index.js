// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import local
import './shelterslist.scss';

// == Component
/**
 * Component to display the list of shelters
 * @param {Array} shelters Array containing the list of the shelters
 */
const SheltersList = ({
  shelters,
}) => (
  <div className="shelterslist">
    <h1>Annuaire des refuges</h1>
    <div className="cards">
      {shelters.map((shelter) => (
        <Link
          to={`/shelter/${(shelter.id)}`}
          className="card-link"
          key={shelter.id}
        >
          <div className="card">
            <img className="image" src={`http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/images/${shelter.picture}`} alt={shelter.name} />
            <div className="card-info">
              <h3>{shelter.name}</h3>
              <h4><span>Adresse : </span>{shelter.address}</h4>
              <h4>{shelter.zip} {shelter.city}</h4>
              <h4><span>Téléphone : </span>{shelter.phoneNumber}</h4>
              <h4><span>Email : </span>{shelter.email}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// == PropTypes validation
SheltersList.propTypes = {
  shelters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SheltersList;
