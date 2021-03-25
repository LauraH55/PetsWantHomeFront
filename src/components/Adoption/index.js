// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './adoption.scss';
import akita from '../../assets/images/akita.jpg';

const Adoption = ({ animals }) => (
  <main className="adoption">
    <h1>Adoption des animaux</h1>
    <div className="cards">
      {animals.map((animal) => (
        <Link
        to="/animal/1"
        className="card-link"
        key={animal.id}
      >
        <div className="card">
          <img className="card-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/Images/" + animal.picture} alt="" />
          <h3>{animal.name}</h3>
          <h4>Race : {animal.race.name}</h4>
          <h4>Âge : {animal.birthdate}</h4>
          <h4>Genre : {animal.gender}</h4>
        </div>
      </Link>
      ))}
    </div>
  </main>
);

export default Adoption;
