// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './adoption.scss';
import akita from '../../assets/images/akita.jpg';

const Adoption = () => (
  <main className="adoption">
    <h1>Adoption des animaux</h1>
    <div className="cards">
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link>
      <Link
        to="/animal/1"
        className="card-link"
      >
        <div className="card">
          <img className="card-image" src={akita} alt="" />
          <h3>Leiko</h3>
          <h4>Race : Akita</h4>
          <h4>Âge : 2 ans</h4>
          <h4>Genre : Mâle</h4>
        </div>
      </Link> 
    </div>
  </main>
);

export default Adoption;
