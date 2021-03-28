// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';


// == Import local
import { getAnimalBySlug } from 'src/utils';

import './animal.scss';
import akita from '../../assets/images/akita.jpg';

const Animal = ({ animals }) => {
  const { slug } = useParams();
  const animal = getAnimalBySlug(slug, animals);
  console.log(animal);

  return (
    <div className="animal">
      <img className="animal-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + animal.picture} alt="#" />
      <div className="animal-aside">
        <div className="animal-shelter">
          <Link
            to="/shelter/1"
            className="animal-shelter-link"
          >
            <h1>Refuge : {animal.shelter}</h1>
          </Link>
          <p>Publié le 24/03/2021</p>
        </div>
        <div className="animal-info">
          <div className="animal-characteristics"> 
            <h3 className="animal-name">{animal.name}</h3>
            <h4>Espèce : {animal.name}</h4>
            <h4>Race : {animal.race.name}</h4>
            <h4>Âge : {animal.birthdate}</h4>
            <h4>Genre : {animal.gender}</h4>
            <h4>Cohabitation : {animal.cohabitation}</h4>
          </div>
          <div className="animal-description">
            <h4>{animal.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;
