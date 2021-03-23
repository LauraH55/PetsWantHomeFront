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
import Register from 'src/components/Register';
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
