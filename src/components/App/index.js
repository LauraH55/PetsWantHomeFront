// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Adoption from 'src/components/Adoption';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Switch>
        <Route path="/adoption">
          <Adoption />
        </Route>
        <Route path="/">
          <Home />
        </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
