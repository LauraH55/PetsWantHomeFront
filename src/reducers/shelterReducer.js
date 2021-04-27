import {
  UPDATE_USER_FIELD,
} from 'src/actions/auth';

import {
  SAVE_SHELTERS,
  SET_MODIFICATION_PROFILE,
  SHELTER_UPDATE_ERROR,
  SHELTER_UPDATE_SUCCESS,
} from 'src/actions/shelters';

const initialState = {
  email: '',
  name: '',
  address: '',
  phoneNumber: '',
  picture: '',
  sheltersList: [],
  shelterModificationId: '',
  shelterModificationName: '',
  shelterModificationAdress: '',
  shelterModificationPhone: '',
  shelterModificationEmail: '',
  shelterModificationPicture: '',
  shelterPicture: '',
  shelterUpdateError: 0,
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
        phoneNumber: action.name === 'phone_number' ? action.newValue : state.phoneNumber,
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
        shelterPicture: action.profile.picture,
        shelterUpdateError: 0,
      };

    /**
     * Display the error message if the update has failed
     */
    case SHELTER_UPDATE_ERROR:
      return {
        ...state,
        shelterUpdateError: 1,
      };

    /**
     * Display the error message if the update has successed
     */
    case SHELTER_UPDATE_SUCCESS:
      return {
        ...state,
        shelterUpdateError: 2,
      };

    default:
      return state;
  }
}

export default shelterReducer;
