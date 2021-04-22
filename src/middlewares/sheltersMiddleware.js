import axios from 'axios';

import {
  FETCH_SHELTERS,
  saveShelters,
  SUBMIT_SHELTER_MODIFICATION,
  shelterUpdateError,
  shelterUpdateSuccess,
  updateShelterImage,
  UPDATE_SHELTER_IMAGE,
} from 'src/actions/shelters';

import {
  loader,
} from 'src/actions/auth';

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
        shelterModificationId,
        shelterModificationName,
        shelterModificationAdress,
        shelterModificationPhone,
        shelterModificationEmail,
        shelterModificationPicture,
        shelterPicture,
      } = store.getState().shelter;

      const data = {
        name: shelterModificationName,
        address: shelterModificationAdress,
        phone_number: shelterModificationPhone,
        email: shelterModificationEmail,
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
            setTimeout(() => {
              window.location = `/shelter/${shelterModificationId}`;
            }, 2000);
          }
          else {
            store.dispatch(updateShelterImage());
          }
        })
        .catch((error) => {
          console.log('SHELTER UPDATE ERROR : ', error);
          store.dispatch(shelterUpdateError());
        });
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
        shelterPicture,
      } = store.getState().shelter;

      const bodyFormData = new FormData();
      if (shelterModificationPicture !== shelterPicture) {
        bodyFormData.append('picture', shelterModificationPicture);
      }

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
