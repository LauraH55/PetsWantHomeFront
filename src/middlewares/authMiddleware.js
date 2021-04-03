import axios from 'axios';
import jwt_decode from "jwt-decode";


import { LOG_IN, LOG_OUT, NEW_SHELTER_CREATION, NEW_USER, saveUser, SAVE_USER } from 'src/actions/auth';
import { loader } from 'src/actions/animals';
const API_URL = 'http://107.22.27.42/apo-PetsWantHome-back/public/api';
// URL local : http://laura-hantz.vpnuser.lan/Apotheose/apo-PetsWantHome-back/public/api
// URL prod : http://107.22.27.42/apo-PetsWantHome-back/public/api
const myurl = 'http://107.22.27.42/apo-PetsWantHome-back/public/api/shelter/create';

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

          const decoded = jwt_decode(response.data.token);
          console.log(decoded.shelter_id);

          if (decoded.shelter_id !== undefined) {
            console.log('REDIRECTION');
            localStorage.setItem('shelterID', decoded.shelter_id);
            //window.location = `/shelter/${decoded.shelter_id}`;
            window.location = '/';
            store.dispatch(loader());  
          } 
          else {
            window.location = '/';
          }


        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

  
    case NEW_SHELTER_CREATION:{
      const {
        email,
        name,
        address,
        phone_number,
        picture,
      } = store.getState().shelter;

      console.log(email);

      const bodyFormData = new FormData();
      bodyFormData.append(email, email);
      bodyFormData.append(name, name);
      bodyFormData.append(address, address);
      bodyFormData.append(phone_number, phone_number);
      bodyFormData.append(picture, picture);
      console.log(bodyFormData);

       {
        axios({
          method: "post",
          url: myurl,
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data", authorization: `Bearer ${localStorage.getItem('token')}`},
        })
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
    /*       const newShelter = {
        email,
        name,
        address,
        phone_number,
        picture,
      }; */

      /* axios.post(`${API_URL}/shelter/create`, bodyFormData, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }) */

    case NEW_USER:{
      const {
        email,
        password,
        confirmPassword,
      } = store.getState().register;

      const newUser = {
        email,
        password,
      };

      if (password === confirmPassword) {
        axios.post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response);
            window.location = '/login';
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
