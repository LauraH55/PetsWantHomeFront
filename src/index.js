// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';

import store from 'src/store';

// == Import : local
// Components
import App from 'src/containers/App';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
