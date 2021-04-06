// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './shelterslist.scss';

const SheltersList = ({ shelters }) => (
  <div className="shelterslist">
    <h1>Liste des refuges</h1>
    <div className="cards">
      {shelters.map((shelter) => (
        <Link
        to={`/shelter/${(shelter.id)}`}
        className="card-link"
        key={shelter.id}
        >
        <div className="card">
          <img className="card-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + shelter.picture} alt="" />
          <h3>{shelter.name}</h3>
          <h4>Adresse : {shelter.address}</h4>
          <h4>Téléphone : {shelter.phoneNumber}</h4>
          <h4>Email : {shelter.email}</h4>
        </div>
      </Link>
      ))}
    </div>
  </div>
);

export default SheltersList;
