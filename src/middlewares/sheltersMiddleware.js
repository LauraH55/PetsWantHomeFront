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
} from 'src/actions/auth';

import {
  validationShelter,
} from 'src/utils/validator';

const URL_FETCH_SHELTERS = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelters';
const MODIFICATION_URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelter/update';

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
            if (shelterModificationPicture === shelterPicture) {
              store.dispatch(shelterUpdateSuccess());
            }
            else {
              store.dispatch(updateShelterImage());
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
        shelterModificationId,
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
        .then((response) => {
          store.dispatch(shelterUpdateSuccess());
          setTimeout(() => {
            window.location = `/shelter/${shelterModificationId}`;
          }, 2000);
        })
        .catch((error) => {
          console.log('SHELTER PICTURE UPDATE ERROR : ', error);
          store.dispatch(shelterUpdateError());
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default sheltersMiddleware;
