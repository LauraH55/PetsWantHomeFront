// == Import npm
import React from 'react';

// == Import local
import './about.scss';
import Emilie from '../../assets/images/Emilie.jpg';
import Laura from '../../assets/images/Laura.jpg';
import Kevin from '../../assets/images/Kevin.jpg';
import Linkedin from '../../assets/images/linkedin.png';

// == Component
const About = () => (
  <div className="about">
    <div className="about-picture1">
      <a href="https://github.com/EmilieDeplanche"><img className="picture" src={Emilie} alt="Emilie" /></a>
      <div>
        <h2>Émilie Deplanche</h2>
        <h3>Product Owner &#38; Git Master</h3>
        <a href="https://www.linkedin.com/in/emilie-deplanche-dev/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a>
      </div>
    </div>
    <div className="about-picture2">
      <div>
        <h2 className="Kevin-name">Kévin Besnier</h2>
        <h3 className="Kevin-job">Lead Dev Front</h3>
        <a className="Kevin-linkedin" href="https://www.linkedin.com/in/kevin-besnier/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a>
      </div>
      <a href="https://github.com/Kevin-Besnier"><img className="picture" src={Kevin} alt="Kevin" /></a>
    </div>
    <div className="about-picture3">
      <a href="https://github.com/LauraH55"><img className="picture" src={Laura} alt="Laura" /></a>
      <div>
        <h2 className="Laura-name">Laura Hantz</h2>
        <h3>Scrum Master &#38; Lead Dev Back</h3>
        <a href="https://www.linkedin.com/in/laura-hantz/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a>
      </div>
    </div>
  </div>
);

// == Export
export default About;
