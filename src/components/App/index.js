// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Adoption from 'src/components/Adoption';
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/containers/Register';
import Animal from 'src/components/Animal';
import Shelter from 'src/components/Shelter';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import LegalMentions from 'src/components/LegalMentions';
import './styles.scss';

// == Composant
const App = ({ loadAnimals }) => {
  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <div className="app">
      <Nav outerContainerId={'App'} pageWrapId={'page-wrap'} />
      <div id="page-wrap">
        <Switch>
          <Route path="/adoption">
            <Adoption />
          </Route>
          <Route path="/animal/1">
            <Animal />
          </Route>
          <Route path="/shelter/1">
            <Shelter />
          </Route>
          <Route path="/legal-mentions">
            <LegalMentions />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadAnimals: PropTypes.func.isRequired,
};

// == Export
export default App;
