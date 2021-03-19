// == Import npm
import React from 'react';

// == Import
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
