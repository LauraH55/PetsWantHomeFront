import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {
  LOG_IN,
  LOG_OUT,
  NEW_USER,
  saveUser,
  loginError,
  emailError,
  passwordError,
  logOut,
  logIn,
  loader,
} from 'src/actions/auth';

import {
  NEW_SHELTER_CREATION,
} from 'src/actions/shelters';

const API_URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api';
const myurl = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelter/create';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Request to log-in an user
     */
    case LOG_IN: {
      const { email, password } = store.getState().auth;

      axios.post(`${API_URL}/login`, {
        username: email,
        password: password,
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          store.dispatch(saveUser(response.data.token));

          const decoded = jwt_decode(response.data.token);
          console.log(decoded.shelter_id);

          if (decoded.shelter_id !== undefined) {
            localStorage.setItem('shelterID', decoded.shelter_id);
            window.location = '/';
            store.dispatch(loader());
          }
          else {
            window.location = '/';
          }
        })
        .catch((error) => {
          console.log('LOG IN ERROR : ', error);
          store.dispatch(loginError());
        });

      next(action);
      break;
    }

    /**
     * Request POST sent to the API to create a new shelter for a logged-in user
     */
    case NEW_SHELTER_CREATION: {
      const {
        email,
        name,
        address,
        phoneNumber,
        picture,
      } = store.getState().shelter;

      const bodyFormData = new FormData();
      bodyFormData.append('email', email);
      bodyFormData.append('name', name);
      bodyFormData.append('address', address);
      bodyFormData.append('phone_number', phoneNumber);
      bodyFormData.append('picture', picture);

      // axios.post(myurl,
      //   {
      //     email,
      //     name,
      //     address,
      //     phoneNumber: phoneNumber,
      //     picture,
      //   },
      //   {
      //     headers : {
      //       'Content-type': "multipart/form-data",
      //       Authorization: `Bearer ${localStorage.getItem('token')}`,
      //     },
      // })

      axios({
        method: 'post',
        url: myurl,
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data', authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem('shelterID', response.data.shelter.id);
          window.location = '/';
        })
        .catch((error) => {
          console.log('NEW SHELTER CREATION ERROR : ', error);
        });

      next(action);
      break;
    }

    /**
     * Request POST sent to the API to create a new user
     */
    case NEW_USER: {
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
            // window.location = '/login';
            store.dispatch(logIn());
          })
          .catch((error) => {
            console.log('NEW USER ERROR : ', error.response.status);

            if (error.response.status == 500) {
              store.dispatch(emailError());
            }
            else {
              store.dispatch(passwordError());
            }
          });
      }
      else {
        console.log('Les mots de passe saisis ne sont pas identiques !');
        store.dispatch(passwordError());
      }

      next(action);
      break;
    }

    /**
     * Action to log out the user
     */
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
