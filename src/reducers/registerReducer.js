import {
  UPDATE_USER_FIELD,
  REG_ERROR,
  LOG_IN,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  regError: 0,
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
     * Set the error number when the registration fails
     */
    case REG_ERROR:
      return {
        ...state,
        password: '',
        confirmPassword: '',
        regError: action.errorNumber,
      };

    /**
     * Set the success message when the registration is good
     */
    case LOG_IN:
      return {
        ...state,
        regError: 1,
      };

    default:
      return state;
  }
}

export default registerReducer;
