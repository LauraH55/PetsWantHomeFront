import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import animalsReducer from './animalsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  animals: animalsReducer,
});

export default rootReducer;
