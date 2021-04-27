import axios from 'axios';

import {
  FETCH_ANIMALS,
  saveAnimals,
  FETCH_RANDOM_ANIMALS,
  saveRandomAnimals,
} from 'src/actions/animals';

import {
  loader,
} from 'src/actions/auth';

const animalsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Request to get the animals list to display
     */
    case FETCH_ANIMALS:
      store.dispatch(loader());
      axios.get('http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/animals')
        .then((response) => {
          // console.log('response: ', response);
          store.dispatch(saveAnimals(response.data));
        })
        .catch((error) => {
          console.log('FETCH ANIMALS ERROR :', error);
        });
      next(action);
      break;

    /**
     * Request to get random animals to display on the home page
     */
    case FETCH_RANDOM_ANIMALS:
      store.dispatch(loader());
      axios.get('http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/home')
        .then((response) => {
          // console.log('response: ', response);
          store.dispatch(saveRandomAnimals(response.data));
        })
        .catch((error) => {
          console.log('FETCH RANDOM ANIMALS ERROR : ', error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default animalsMiddleware;
