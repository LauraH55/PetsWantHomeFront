// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';
import akita from '../../assets/images/akita.jpg';
import paw from '../../assets/images/pawnextb&w.png';

const Home = () => (
  <main className="home">
    <div className="banner">
      <h1 className="title">Pets Want Home</h1>
    </div>
    <h2 className="subtitle">Quelques animaux disponibles à l'adoption</h2>
    <div className="thumbnails">
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={akita} alt="#" />
      </Link>
      <Link
        to="/animal/1"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={paw} alt="#" />
      </Link>
    </div>
  </main>
);

export default Home;
