import axios from 'axios';

import { LOG_IN, NEW_SHELTER_CREATION, saveUser } from 'src/actions/auth';

const API_URL = 'http://107.22.27.42/apo-PetsWantHome-back/public/api';
// URL local : http://laura-hantz.vpnuser.lan/Apotheose/apo-PetsWantHome-back/public/api
// URL prod : http://107.22.27.42/apo-PetsWantHome-back/public/api

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password, token } = store.getState().auth;
      
      if (username === 'shelter@shelter.com' && password === 'shelter') {
        store.dispatch(saveUser(true, 'abc'));
      }
      axios.post(`${API_URL}/login`, {
        username: username,
        password: password,
        
      }
      // ,
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUser(response.data.logged, response.data.token));
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
