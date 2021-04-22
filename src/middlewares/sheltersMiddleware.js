import axios from 'axios';

import {
  FETCH_SHELTERS,
  saveShelters,
  SUBMIT_SHELTER_MODIFICATION,
  shelterUpdateError,
  shelterUpdateSuccess,
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
          }, 1000);
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

      const bodyFormData = new FormData();
      bodyFormData.append('email', shelterModificationEmail);
      bodyFormData.append('id', shelterModificationId);
      bodyFormData.append('name', shelterModificationName);
      bodyFormData.append('phone_number', shelterModificationPhone);
      bodyFormData.append('address', shelterModificationAdress);
      if (shelterModificationPicture !== shelterPicture) {
        bodyFormData.append('picture', shelterModificationPicture);
      }

      axios({
        method: 'patch',
        url: MODIFICATION_URL,
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data', authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(shelterUpdateSuccess());
          setTimeout(() => {
            window.location = `/shelter/${shelterModificationId}`;
          }, 2000);
        })
        .catch((error) => {
          console.log('SHELTER UPDATE ERROR : ', error);
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
