import axios from 'axios';

import { FETCH_ANIMALS, saveAnimals } from 'src/actions/animals';

const animalsMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_ANIMALS:
      axios.get('http://laura-hantz.vpnuser.lan/Apotheose/apo-PetsWantHome-back/public/api/animals')
      .then((response) => {
        console.log('response: ', response);
        store.dispatch(saveAnimals(response.data));
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
