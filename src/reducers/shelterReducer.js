 import { UPDATE_USER_FIELD } from 'src/actions/auth';

const initialState = {
    email: '',
    password: '',
    shelter: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    picture: '',
};

function shelterReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
        shelter: action.name === 'shelter' ? action.newValue : state.shelter,
        confirmPassword: action.name === 'confirmPassword' ? action.newValue : state.confirmPassword,
        address: action.name === 'address' ? action.newValue : state.address,
        phoneNumber: action.name === 'phoneNumber' ? action.newValue : state.phoneNumber,
        picture: action.name === 'picture' ? action.newValue : state.picture,
      };
    default:
      return state;
  }
}

export default shelterReducer;
