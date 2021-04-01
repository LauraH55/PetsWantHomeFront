import { UPDATE_USER_FIELD } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

function registerReducer(state = initialState, action) {
  switch (action.type) {

      case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
        confirmPassword: action.name === 'confirmPassword' ? action.newValue : state.confirmPassword,

      };

    default:
      return state;
  }
}

export default registerReducer;
