import { UPDATE_USER_FIELD, EMAIL_ERROR, PASSWORD_ERROR } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  emailError: false,
  passwordError: false,
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

      case EMAIL_ERROR:
        return {
          ...state,
          emailError: true,
        };
      
      case PASSWORD_ERROR:
        return {
          ...state,
          passwordError: true,
        };

    default:
      return state;
  }
}

export default registerReducer;
