import axios from 'axios';

import { FETCH_ANIMALS, saveAnimals, FETCH_RANDOM_ANIMALS, saveRandomAnimals, loader } from 'src/actions/animals';

const animalsMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_ANIMALS:
      store.dispatch(loader());
      axios.get('http://107.22.27.42/apo-PetsWantHome-back/public/api/animals')
      .then((response) => {
        console.log('response: ', response);
        setTimeout(() => {
          store.dispatch(saveAnimals(response.data));
        }, 5000);
        
      })
      .catch((error) => {
        console.log('error:', error);
      });
      next(action);
      break;

    case FETCH_RANDOM_ANIMALS:
      store.dispatch(loader());
      axios.get('http://107.22.27.42/apo-PetsWantHome-back/public/api/home')
      .then((response) => {
        console.log('response: ', response);
        setTimeout(() => {
          store.dispatch(saveRandomAnimals(response.data));
          store.dispatch(loader());
        }, 3000);
        
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
export default animalsMiddleware;
