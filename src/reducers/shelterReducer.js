import {
  UPDATE_USER_FIELD,
} from 'src/actions/auth';

import {
  SAVE_SHELTERS,
  SET_MODIFICATION_PROFILE,
} from 'src/actions/shelters';

const initialState = {
  email: '',
  name: '',
  address: '',
  phone_number: '',
  picture: '',
  sheltersList: [],
  shelterModificationId: '',
  shelterModificationName: '',
  shelterModificationAdress: '',
  shelterModificationPhone: '',
  shelterModificationEmail: '',
  shelterModificationPicture: '',
};

function shelterReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Get the list of all the shelters
     */
    case SAVE_SHELTERS:
      return {
        ...state,
        sheltersList: action.shelters,
      };

    /**
     * Update the new shelter creation fields' value
     */
    case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        name: action.name === 'name' ? action.newValue : state.name,
        address: action.name === 'address' ? action.newValue : state.address,
        phone_number: action.name === 'phone_number' ? action.newValue : state.phone_number,
        picture: action.name === 'picture' ? action.newValue : state.picture,
        shelterModificationName: action.name === 'shelterModificationName' ? action.newValue : state.shelterModificationName,
        shelterModificationAdress: action.name === 'shelterModificationAdress' ? action.newValue : state.shelterModificationAdress,
        shelterModificationPhone: action.name === 'shelterModificationPhone' ? action.newValue : state.shelterModificationPhone,
        shelterModificationEmail: action.name === 'shelterModificationEmail' ? action.newValue : state.shelterModificationEmail,
        shelterModificationPicture: action.name === 'shelterModificationPicture' ? action.newValue : state.shelterModificationPicture,
      };

    /**
     * Set the informations of the shelter to update them
     */
    case SET_MODIFICATION_PROFILE:
      return {
        ...state,
        shelterModificationId: action.profile.id,
        shelterModificationName: action.profile.name,
        shelterModificationAdress: action.profile.address,
        shelterModificationPhone: action.profile.phoneNumber,
        shelterModificationEmail: action.profile.email,
        shelterModificationPicture: action.profile.picture,
      };

    default:
      return state;
  }
}

export default shelterReducer;
