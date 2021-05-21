import axios from 'axios';

import {
  FETCH_SHELTERS,
  saveShelters,
  SUBMIT_SHELTER_MODIFICATION,
  shelterUpdateError,
  shelterUpdateSuccess,
  updateShelterImage,
  UPDATE_SHELTER_IMAGE,
  shelterErrorsArray,
} from 'src/actions/shelters';

import {
  loader,
  UPDATE_PASSWORD,
  updatePassword,
} from 'src/actions/auth';

import {
  validationShelter,
  validationPassword,
} from 'src/utils/validator';

const URL_FETCH_SHELTERS = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelters';
const MODIFICATION_URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelter/update';
const URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api';
const API_URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api';

const sheltersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Request to get the shelters list to display
     */
    case FETCH_SHELTERS:
      store.dispatch(loader());
      axios.get(URL_FETCH_SHELTERS)
        .then((response) => {
          // console.log('response: ', response);
          setTimeout(() => {
            store.dispatch(saveShelters(response.data));
          }, 0);
        })
        .catch((error) => {
          console.log('FETCH SHELTERS ERROR : ', error);
        });
      next(action);
      break;

    /**
     * Request to update shelter's informations
     */
    case SUBMIT_SHELTER_MODIFICATION: {
      const {
        shelterModificationPicture,
        shelterPicture,
      } = store.getState().shelter;

      const address = store.getState().shelter.shelterModificationAdress.trim();
      const zip = store.getState().shelter.shelterModificationZip.trim();
      const phoneNumber = store.getState().shelter.shelterModificationPhone.trim();
      const email = store.getState().shelter.shelterModificationEmail.trim();

      const name = store.getState().shelter.shelterModificationName.trim();

      const city = store.getState().shelter.shelterModificationCity.trim();
      const refugeCity = city.slice(0, 1);
      const refugeCityCapitalized = city.replace(refugeCity, refugeCity.toUpperCase());

      const validation = validationShelter(
        name,
        address,
        zip,
        refugeCityCapitalized,
        phoneNumber,
        email,
        shelterPicture,
        false,
      );

      const {
        userActualPassword,
        userNewPassword,
        userConfirmPassword,
      } = store.getState().auth;

      const passwordNoTUpdate = userActualPassword.length === 0
        && userNewPassword.length === 0
        && userConfirmPassword.length === 0;
      const pictureNotUpdate = shelterModificationPicture === shelterPicture;

      if (validation.validate) {
        const data = {
          name,
          address,
          city: refugeCityCapitalized,
          zip,
          phone_number: phoneNumber,
          email,
        };

        axios({
          method: 'patch',
          url: MODIFICATION_URL,
          data,
          headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        })
          .then((response) => {
            console.log(response);

            if (pictureNotUpdate && passwordNoTUpdate) {
              store.dispatch(shelterUpdateSuccess());
            }
            else if (!pictureNotUpdate && passwordNoTUpdate) {
              store.dispatch(updateShelterImage());
            }
            else if (pictureNotUpdate && !passwordNoTUpdate) {
              axios.post(`${API_URL}/login`, {
                username: localStorage.email,
                password: userActualPassword,
              })
                .then(() => {
                  store.dispatch(updatePassword());
                })
                .catch((failure) => {
                  console.log('PASSWORD UPDATE ERROR', failure.response.data.violations);
                  store.dispatch(shelterUpdateError());
                  const passwordError = {
                    password: 'Le mise à jour du mot de passe n\'a pu s\'effectuer',
                  };
                  store.dispatch(shelterErrorsArray(passwordError));
                });
            }
            else if (!pictureNotUpdate && !passwordNoTUpdate) {
              axios.post(`${API_URL}/login`, {
                username: localStorage.email,
                password: userActualPassword,
              })
                .then(() => {
                  store.dispatch(updatePassword());
                })
                .catch((failure) => {
                  console.log('PASSWORD UPDATE ERROR', failure.response.data.violations);
                  store.dispatch(shelterUpdateError());
                  const passwordError = {
                    password: 'Le mise à jour du mot de passe n\'a pu s\'effectuer',
                  };
                  store.dispatch(shelterErrorsArray(passwordError));
                });
            }
          })
          .catch((error) => {
            console.log('SHELTER UPDATE ERROR : ', error.response.data.violations);
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
     * Request to update the picture of the shelter
     */
    case UPDATE_SHELTER_IMAGE: {
      const {
        shelterModificationPicture,
      } = store.getState().shelter;

      const bodyFormData = new FormData();
      bodyFormData.append('picture', shelterModificationPicture);

      axios({
        method: 'post',
        url: `${MODIFICATION_URL}/image`,
        data: bodyFormData,
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then(() => {
          store.dispatch(shelterUpdateSuccess());
        })
        .catch((error) => {
          console.log('SHELTER PICTURE UPDATE ERROR : ', error);
          store.dispatch(shelterUpdateError());
          const errors = {
            picture: 'Un problème est survenu pour la mise à jour de la photo',
          };
          store.dispatch(shelterErrorsArray(errors));
        });
      next(action);
      break;
    }

    /**
     * Request to update the password of the shelter/user
     */
    case UPDATE_PASSWORD: {
      const {
        userNewPassword,
        userConfirmPassword,
      } = store.getState().auth;

      const {
        shelterModificationPicture,
        shelterPicture,
      } = store.getState().shelter;

      const validation = validationPassword(
        userNewPassword,
        userConfirmPassword,
      );

      if (validation.validate) {
        const data = {
          password: userNewPassword,
        };

        axios({
          method: 'patch',
          url: `${URL}/user/update`,
          data,
          headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        })
          .then((response) => {
            console.log(response);
            if (shelterModificationPicture === shelterPicture) {
              store.dispatch(updateShelterImage());
            }
            else {
              store.dispatch(shelterUpdateSuccess());
            }
          })
          .catch((error) => {
            console.log('SHELTER PASSWORD UPDATE ERROR : ', error.response.data.violations);
            store.dispatch(shelterUpdateError());
            const passwordError = {
              password: 'Un problème est survenu pour la mise à jour du mot de passe',
            };
            store.dispatch(shelterErrorsArray(passwordError));
          });
      }
      else {
        store.dispatch(shelterUpdateError());
        store.dispatch(shelterErrorsArray(validation.errors));
      }
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default sheltersMiddleware;
