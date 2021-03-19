// == Import npm
import React from 'react';

import './home.scss';
import akita from '../../assets/images/akita.jpg';
import suivant from '../../assets/images/suivant.png';

const Home = () => (
  <main className="home">
    <div className="banner">
      <h1 className="title">Pets Want Home</h1>
    </div>
    <h2 className="subtitle">Quelques animaux disponibles à l'adoption</h2>
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={akita} alt="" />
    <img className="thumbnails" src={suivant} alt="" />

  </main>
);

export default Home;
