// == Import npm
import React from 'react';

import './footer.scss';
import Logo from '../../assets/img/B&W-Logo-PWH.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <img className="footer-container-image" src={Logo} alt="logo" />
      <a href="#">Mentions Légales</a>
      <a href="#">Contact</a>
      <a href="#">À propos</a>
    </div>
    <p className="footer-copyright">
      © 2021 PetsWantHome, Tous droits réservés.
    </p>
  </footer>
);

export default Footer;
