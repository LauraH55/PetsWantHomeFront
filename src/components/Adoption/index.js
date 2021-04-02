// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import { slugifyName, getDate, getGender } from 'src/utils';

import './adoption.scss';

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
          <img className="card-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + animal.picture} alt="" />
          <h3>{animal.name}</h3>
          {animal.race && <h4>Race : {animal.race.name}</h4>}
          <h4>Âge : {getDate(animal.birthdate)} ans</h4>
          <h4>Genre : {getGender(animal.gender)}</h4>
        </div>
      </Link>
      ))}
    </div>
  </main>
);

export default Adoption;
