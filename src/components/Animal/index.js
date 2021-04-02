// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';


// == Import local
import { getAnimalBySlug, getDate, getGender, getCohabitation } from 'src/utils';

import './animal.scss';

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
            to={`/shelter/${(animal.shelter.id)}`}
            className="animal-shelter-link"
          >
            <h1>{animal.shelter !== null ? animal.shelter.name : 'Pas de refuge'}</h1>
          </Link>
          <p>Publié le 24/03/2021</p>
        </div>
        <div className="animal-info">
          <div className="animal-characteristics"> 
            <h3 className="animal-name">{animal.name}</h3>
            <h4>Espèce : {animal.species.name}</h4>
            {animal.race && <h4>Race : {animal.race.name}</h4>}
            <h4>Âge : {getDate(animal.birthdate)} ans</h4>
            <h4>Genre : {getGender(animal.gender)}</h4>
            <h4>Cohabitation : 
            {animal.catCohabitation ? ' Chats -' : ''}
            {animal.dogCohabitation ? ' Chiens -' : ''}
            {animal.nacCohabitation ? ' NAC -' : ''}
            {animal.childCohabitation ? ' Enfants -' : ''}
            {animal.unknownCohabitation ? ' Non renseigné -' : ''}
            </h4>
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
