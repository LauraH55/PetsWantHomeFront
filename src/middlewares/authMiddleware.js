import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {
  LOG_IN,
  LOG_OUT,
  NEW_USER,
  saveUser,
  loginError,
  logOut,
  logIn,
  loader,
  regError,
  DELETE_CONFIRM,
} from 'src/actions/auth';

import {
  NEW_SHELTER_CREATION,
  shelterUpdateError,
  shelterErrorsArray,
} from 'src/actions/shelters';

import {
  validationShelter,
  validationUser,
} from 'src/utils/validator';

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
          localStorage.setItem('isLogged', true);
          localStorage.setItem('email', email);

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
        picture,
      } = store.getState().shelter;

      const address = store.getState().shelter.address.trim();
      const zip = store.getState().shelter.zip.trim();
      const phoneNumber = store.getState().shelter.phoneNumber.trim();
      const email = store.getState().shelter.email.trim();

      const name = store.getState().shelter.name.trim();

      const city = store.getState().shelter.city.trim();
      const refugeCity = city.slice(0, 1);
      const refugeCityCapitalized = city.replace(refugeCity, refugeCity.toUpperCase());

      const validation = validationShelter(
        name,
        address,
        zip,
        refugeCityCapitalized,
        phoneNumber,
        email,
        picture,
        true,
      );

      if (validation.validate) {
        const bodyFormData = new FormData();
        bodyFormData.append('name', name);
        bodyFormData.append('address', address);
        bodyFormData.append('city', refugeCityCapitalized);
        bodyFormData.append('zip', zip);
        bodyFormData.append('phone_number', phoneNumber);
        bodyFormData.append('email', email);
        bodyFormData.append('picture', picture);

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
            console.log('NEW SHELTER CREATION ERROR : ', error.response.data.violations);
            store.dispatch(shelterUpdateError());
            store.dispatch(shelterErrorsArray(error.response.data.violations));
          });
      }
      else {
        store.dispatch(shelterUpdateError());
        store.dispatch(shelterErrorsArray(validation.errors));
      }
      next(action);
      break;
    }

    /**
     * Request POST sent to the API to create a new user
     */
    case NEW_USER: {
      const {
        password,
        confirmPassword,
      } = store.getState().register;
      const email = store.getState().register.email.trim();

      const validation = validationUser(
        email,
        password,
        confirmPassword,
      );

      if (validation.validate) {
        const newUser = {
          email,
          password,
        };

        axios.post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response);
            localStorage.setItem('regError', 1);
            store.dispatch(logIn());
          })
          .catch((error) => {
            console.log('NEW USER ERROR : ', error.response);

            if (error.response.status == 500) {
              store.dispatch(regError(5));
            }
          });
      }
      else {
        store.dispatch(regError(validation.errors));
      }
      next(action);
      break;
    }

    /**
     * Request sent to delete the user account and all the informations associated
     */
    case DELETE_CONFIRM: {
      const { passwordDelete } = store.getState().register;

      axios.post(`${API_URL}/login`, {
        username: localStorage.email,
        password: passwordDelete,
      })
        .then(() => {
          axios({
            method: 'delete',
            url: `${API_URL}/user/delete`,
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
          })
            .then((response) => {
              console.log(response);
              store.dispatch(regError(8));
            })
            .catch((error) => {
              console.log('DELETE USER ERROR : ', error.response);
              const deleteError = {
                deleteError: 'La suppression du compte ne s\'est pas effectuée. Veuillez essayer ultérieurement.',
              };
              store.dispatch(shelterErrorsArray(deleteError));
            });
        })
        .catch((failure) => {
          console.log('DELETE ACCOUNT ERROR', failure.response.data.violations);
          const deleteError = {
            deleteError: 'La suppression du compte ne s\'est pas effectuée.',
          };
          store.dispatch(shelterErrorsArray(deleteError));
        });
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
