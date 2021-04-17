import {
  UPDATE_USER_FIELD,
  EMAIL_ERROR,
  PASSWORD_ERROR,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  emailError: false,
  passwordError: false,
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Update the new user registration fields' value
     */
    case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
        confirmPassword: action.name === 'confirmPassword' ? action.newValue : state.confirmPassword,

      };

    /**
     * Display the email error message
     */
    case EMAIL_ERROR:
      return {
        ...state,
        emailError: true,
      };

    /**
     * Display the password error message
     */
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
