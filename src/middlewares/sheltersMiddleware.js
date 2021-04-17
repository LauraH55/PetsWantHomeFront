import axios from 'axios';

import {
  FETCH_SHELTERS,
  saveShelters,
} from 'src/actions/shelters';

const URL_FETCH_SHELTERS = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelters';

const sheltersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Request to get the shelters list to display
     */
    case FETCH_SHELTERS:
      axios.get(URL_FETCH_SHELTERS)
        .then((response) => {
          // console.log('response: ', response);
          setTimeout(() => {
            store.dispatch(saveShelters(response.data));
          }, 1000);
        })
        .catch((error) => {
          console.log('FETCH SHELTERS ERROR : ', error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default sheltersMiddleware;
