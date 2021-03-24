// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './shelter.scss';
import refuge from '../../assets/images/refuge.jpg';
import akita from '../../assets/images/akita.jpg';

const Shelter = () => (
  <div className="shelter">
    <h1>Nom du refuge</h1>
    <div>
      <div className="shelter-info">
        <img className="shelter-image" src={refuge} alt="#" />
        <div className="shelter-characteristics">
          <h3><span>Adresse :</span> Lorem ipsum dolor sit amet consectetur adipisicing. </h3>
          <h3><span>Téléphone :</span> 02-99-33-77-88</h3>
          <h3><span>Email :</span> shelter@shelter.com</h3>
        </div>
      </div>
      <div className="shelter-animals">
        <Link
          to="/animal/1"
        >
          <img className="shelter-animals-image" src={akita} alt="#"/>
        </Link>
        <Link
          to="/animal/1"
        >
          <img className="shelter-animals-image" src={akita} alt="#"/>
        </Link>        <Link
          to="/animal/1"
        >
          <img className="shelter-animals-image" src={akita} alt="#"/>
        </Link>
      </div>
    </div>
    
  </div>
);

export default Shelter;
