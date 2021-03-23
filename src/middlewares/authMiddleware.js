import axios from 'axios';

import { LOG_IN } from 'src/actions/auth';

const API_URL = 'http://laura-hantz.vpnuser.lan/Apotheose/apo-PetsWantHome-back/public/api/shelters';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().auth;

      axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
