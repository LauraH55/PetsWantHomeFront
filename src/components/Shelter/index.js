// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { slugifyName } from 'src/utils';

import './shelter.scss';

const Shelter = ({ animals, isLogged }) => {
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
          <div>
            <div className="shelter-characteristics">
              <h3><span>Adresse :</span> {shelter.shelter.address}</h3>
              <h3><span>Téléphone :</span> {shelter.shelter.phoneNumber}</h3>
              <h3><span>Email :</span> {shelter.shelter.email}</h3>
            </div>
            {isLogged && (
              <div>
                <button className="shelter-button">Modifier le profil</button>
                <a href={"http://107.22.27.42/apo-PetsWantHome-back/public/back/shelter/" + shelter.shelter.id}><button className="shelter-button">Gestion des animaux</button></a>
              </div>
            )}
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
