import { UPDATE_USER_FIELD } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  shelter: '',
  address: '',
  phoneNumber: '',
  picture: '',
};

function registerReducer(state = initialState, action) {
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

export default registerReducer;
