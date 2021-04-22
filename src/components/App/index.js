// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import Nav from 'src/containers/Nav';
import Home from 'src/containers/Home';
import Footer from 'src/components/Footer';
import Adoption from 'src/containers/Adoption';
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/containers/Register';
import RegisterShelter from 'src/containers/RegisterShelter';
import Animal from 'src/containers/Animal';
import Shelter from 'src/containers/Shelter';
import ShelterModification from 'src/containers/ShelterModification';
import SheltersList from 'src/containers/SheltersList';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import LegalMentions from 'src/components/LegalMentions';
import Loader from 'src/components/Loader';
import Error from 'src/components/Error';
import './styles.scss';

// == Component
/**
 * Main component of the website in which there is the whole project
 * @param {Function} loadAnimals Action to get all the animals from the API
 * @param {Function} loadRandomAnimals Action to get the random animals from the API
 * @param {Function} loadShelters Action to get all the shelters from the API
 * @param {Boolean} loading Boolean to display or not the content of the page
 */
const App = ({
  loadAnimals,
  loadRandomAnimals,
  loadShelters,
  loading,
}) => {
  useEffect(() => {
    loadAnimals();
    loadRandomAnimals();
    loadShelters();
  }, []);

  return (
    <div className="app">

      {loading
      && (
      <>
        <Nav />
        <Loader />
      </>
      )}

      {!loading && (
        <>
          <Nav />
          <Switch>
            <Route path="/adoption">
              <Adoption />
            </Route>
            <Route path="/animal/:slug">
              <Animal />
            </Route>
            <Route path="/shelter/modification/:idShelter">
              <ShelterModification />
            </Route>
            <Route path="/shelter/:idShelter">
              <Shelter />
            </Route>
            <Route path="/shelters">
              <SheltersList />
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
            <Route path="/admin/shelter/create">
              <RegisterShelter />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route to="/error">
              <Error />
            </Route>
            <Route to="">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </>
      )}

    </div>
  );
};

// == PropTypes validation
App.propTypes = {
  loadAnimals: PropTypes.func.isRequired,
  loadRandomAnimals: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadShelters: PropTypes.func.isRequired,
};

// == Export
export default App;
