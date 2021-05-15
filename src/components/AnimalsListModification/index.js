// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import './animalsListModification.scss';

// == Component
/**

 */
const AnimalsListModification = ({

}) => {
  const { idShelter } = useParams();
  console.log(idShelter);

  return (
    <div className="animalsListModification">
      <h1>NOM DU REFUGE</h1>
      <h2>Animaux à adopter</h2>
      <table className="adopting-animals-list">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Genre</th>
            <th>Date de naissance</th>
            <th>Race</th>
            <th><button type="button" className="addAnimal">Ajouter un animal</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Red</td>
            <td>Mâle</td>
            <td>03/10/2013</td>
            <td> </td>
            <td><button type="button" className="updateAnimal">Modifier</button><button type="button" className="archiveAnimal">Archiver</button></td>
          </tr>
          <tr>
            <td>Erode</td>
            <td>Femelle</td>
            <td>06/09/2019</td>
            <td>Kishu</td>
            <td><button type="button" className="updateAnimal">Modifier</button><button type="button" className="archiveAnimal">Archiver</button></td>
          </tr>
        </tbody>
      </table>
      {/* <div className="adopting-animals-list">
        <div className="specs-line">
          <p>Nom</p>
          <p>Genre</p>
          <p>Date de naissance</p>
          <p>Race</p>
          <button type="button">Ajouter un animal</button>
        </div>
      </div> */}
      <h2>Animaux adoptés</h2>
      <table className="adopted-animals-list">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Genre</th>
            <th>Date de naissance</th>
            <th>Race</th>
            <th><button type="button" className="addAnimal">Ajouter un animal</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seven</td>
            <td>Femelle</td>
            <td>09/19/2009</td>
            <td> </td>
            <td><button type="button" className="updateAnimal">Modifier</button><button type="button" className="archiveAnimal">Archiver</button></td>
          </tr>
          <tr>
            <td>Rajah</td>
            <td>Femelle</td>
            <td>10/22/2014</td>
            <td> </td>
            <td><button type="button" className="updateAnimal">Modifier</button><button type="button" className="archiveAnimal">Archiver</button></td>
          </tr>
        </tbody>
      </table>
      {/* <div className="adopted-animals-list">
        <div className="specs-line">
          <p>Nom</p>
          <p>Genre</p>
          <p>Date de naissance</p>
          <p>Race</p>
        </div>
      </div> */}
    </div>
  );
};

// == PropTypes validation
AnimalsListModification.propTypes = {

};

// == Export
export default AnimalsListModification;
