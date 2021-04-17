import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import animalsReducer from './animalsReducer';
import shelterReducer from './shelterReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  animals: animalsReducer,
  shelter: shelterReducer,
});

export default rootReducer;
