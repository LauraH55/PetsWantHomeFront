// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './animal.scss';
import akita from '../../assets/images/akita.jpg';

const Animal = () => (
  <div className="animal">
    <img className="animal-image" src={akita} alt="#" />
    <div className="animal-aside">
      <div className="animal-shelter">
        <Link
          to="/shelter/1"
          className="animal-shelter-link"
        >
          <h1>Nom du Refuge</h1>
        </Link>
        <p>Publié le 24/03/2021</p>
      </div>
      <div className="animal-info">
        <div className="animal-characteristics"> 
          <h3 className="animal-name">Simba</h3>
          <h4>Espèce : Chien</h4>
          <h4>Race : Akita</h4>
          <h4>Âge : 2ans</h4>
          <h4>Genre : Mâle</h4>
          <h4>Cohabitation : Lorem ipsum dolor sit amet.</h4>
        </div>
        <div className="animal-description">
          <h4>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur rerum voluptatem magni, modi rem.</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Animal;
