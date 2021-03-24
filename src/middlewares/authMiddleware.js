import axios from 'axios';

import { LOG_IN, NEW_SHELTER_CREATION } from 'src/actions/auth';

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

    //TODO Waiting for the axios URL
    case NEW_SHELTER_CREATION:{
      const {
        email,
        password,
        confirmPassword,
        shelter,
        address,
        phoneNumber,
        picture,
      } = store.getState().register;

      const newShelter = {
        email,
        password,
        shelter,
        address,
        phoneNumber,
        picture,
      };

      console.log(shelter);
      if (password === confirmPassword) {
        axios.post(url, newShelter)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
