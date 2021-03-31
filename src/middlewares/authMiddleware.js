import axios from 'axios';

import { LOG_IN, LOG_OUT, NEW_SHELTER_CREATION, saveUser, SAVE_USER } from 'src/actions/auth';

const API_URL = 'http://107.22.27.42/apo-PetsWantHome-back/public/api';
// URL local : http://laura-hantz.vpnuser.lan/Apotheose/apo-PetsWantHome-back/public/api
// URL prod : http://107.22.27.42/apo-PetsWantHome-back/public/api

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().auth;
      
      axios.post(`${API_URL}/login`, {
        username: username,
        password: password,
      })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          console.log(localStorage);
          store.dispatch(saveUser(response.data.logged, response.data.token));
          console.log(saveUser);
           
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
        //shelter,
       // address,
        //phoneNumber,
       // picture,
      } = store.getState().register;

      const newShelter = {
        email,
        password,
        //shelter,
        //address,
        //phoneNumber,
        //picture,
      };

      //console.log(shelter);
      if (password === confirmPassword) {
        axios.post(`${API_URL}/register`, newShelter)
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

    case LOG_OUT:
      window.location = '/';
      localStorage.clear();
      next(action);
      break;

    default:
      next(action);
  }
};

export default authMiddleware;
