// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'src/store';

// == Import : local
// Composants
import App from 'src/containers/App';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
