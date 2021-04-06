// == Import npm
import React from 'react';

import './about.scss';
import Logo from '../../assets/images/B&W-Logo-PWH.png';
import Emilie from '../../assets/images/Emilie.jpg';
import Laura from '../../assets/images/Laura.jpg';
import Kevin from '../../assets/images/Kevin.jpg';
import Linkedin from '../../assets/images/linkedin.png';


const About = () => (
  <div className="about">
    <img className="about-logo" src={Logo} alt="logo" />
    <div className="about-picture1">
      <img className="picture" src={Emilie} alt="Emilie" />
      <div>
        <h2>Émilie Deplanche</h2>
        <h3>Product Owner &#38; Git Master</h3>
        <a href="https://www.linkedin.com/in/emilie-deplanche-dev/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a>
      </div>
    </div>
    <div className="about-picture2">
      <img className="picture" src={Kevin} alt="Kevin" />
      <div>
        <h2>Kévin Besnier</h2>
        <h3>Lead Dev Front</h3>
        <a href="https://www.linkedin.com/in/kevin-besnier/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a>
      </div>
    </div>
    <div className="about-picture3">
      <img className="picture" src={Laura} alt="Laura" />
      <div>
        <h2 className="Laura">Laura Hantz</h2>
        <h3>Scrum Master &#38; Lead Dev Back</h3>
        <a href="https://www.linkedin.com/in/laura-hantz/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a>
      </div>
    </div>
  </div>
);

export default About;
