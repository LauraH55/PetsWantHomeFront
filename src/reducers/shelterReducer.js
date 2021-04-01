 import { UPDATE_USER_FIELD } from 'src/actions/auth';

const initialState = {
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    address: '',
    phone_number: '',
    picture: '',
};

function shelterReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
        name: action.name === 'name' ? action.newValue : state.name,
        confirmPassword: action.name === 'confirmPassword' ? action.newValue : state.confirmPassword,
        address: action.name === 'address' ? action.newValue : state.address,
        phone_number: action.name === 'phone_number' ? action.newValue : state.phone_number,
        picture: action.name === 'picture' ? action.newValue : state.picture,
      };
    default:
      return state;
  }
}

export default shelterReducer;
