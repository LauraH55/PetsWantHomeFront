import axios from 'axios';

import {  loader } from 'src/actions/animals';
import { FETCH_SHELTERS, saveShelters } from 'src/actions/shelters';

const URL_FETCH_SHELTERS = 'http://107.22.27.42/apo-PetsWantHome-back/public/api/shelters';

const sheltersMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_SHELTERS:
      axios.get(URL_FETCH_SHELTERS)
      .then((response) => {
        console.log('response: ', response);
        setTimeout(() => {
          store.dispatch(saveShelters(response.data));
        }, 1000);
        
      })
      .catch((error) => {
        console.log('error:', error);
      });
      next(action);
      break;

    default:
      next(action);
  }
};
export default sheltersMiddleware;
