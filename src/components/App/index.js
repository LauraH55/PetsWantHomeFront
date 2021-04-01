// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Home from 'src/containers/Home';
import Footer from 'src/components/Footer';
import Adoption from 'src/containers/Adoption';
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/containers/Register';
import RegisterShelter from 'src/containers/RegisterShelter';
import Animal from 'src/containers/Animal';
import Shelter from 'src/containers/Shelter';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import LegalMentions from 'src/components/LegalMentions';
import Loader from 'src/components/Loader';
import './styles.scss';

// == Composant
const App = ({ loadAnimals,loadRandomAnimals, loading }) => {
  useEffect(() => {
    loadAnimals();
    loadRandomAnimals();
  }, []);

  return (
    <div className="app">
      {loading && 
      <>
        <Nav /> 
        <Loader />
      </>}

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
              <Route path="/shelter/:id_shelter">
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
              <Route path="/admin/shelter/create">
                <RegisterShelter />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          <Footer />
        </>
      )}
    </div>
    
  );
};

App.propTypes = {
  loadAnimals: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
