import {
  UPDATE_USER_FIELD,
} from 'src/actions/auth';

import {
  SAVE_SHELTERS,
} from 'src/actions/shelters';

const initialState = {
  email: '',
  name: '',
  address: '',
  phone_number: '',
  picture: '',
  sheltersList: [],
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
      };

    default:
      return state;
  }
}

export default shelterReducer;
