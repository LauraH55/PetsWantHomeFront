// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { slugifyName } from 'src/utils';

import './shelter.scss';

const Shelter = ({ animals }) => {
  const { id_shelter } = useParams();

  const shelter = animals.find((animal) => animal.shelter.id == id_shelter);
  console.log(shelter);

  const animalsShelter = animals.filter(function(animal) {
    return animal.shelter.id == id_shelter;
  });

  console.log(animalsShelter);

  return(
    <div className="shelter">
      <h1>{shelter.shelter.name}</h1>
      <div>
        <div className="shelter-info">
          <img className="shelter-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + shelter.shelter.picture} alt="#" />
          <div className="shelter-characteristics">
            <h3><span>Adresse :</span> {shelter.shelter.address}</h3>
            <h3><span>Téléphone :</span> {shelter.shelter.phoneNumber}</h3>
            <h3><span>Email :</span> {shelter.shelter.email}</h3>
          </div>
        </div>
        <div className="shelter-animals">
          {animalsShelter.map((animal) => (
            <Link
            to={`/animal/${slugifyName(animal.name)}`}
            className=""
            key={animal.id}
            >
            <img className="shelter-animals-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + animal.picture} alt="#" />
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Shelter;
