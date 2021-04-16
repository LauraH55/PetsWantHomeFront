import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authMiddleware from 'src/middlewares/authMiddleware';
import animalsMiddleware from 'src/middlewares/animalsMiddleware';
import sheltersMiddleware from 'src/middlewares/sheltersMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    animalsMiddleware,
    sheltersMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
