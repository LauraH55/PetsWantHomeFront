import {
  UPDATE_USER_FIELD,
  REG_ERROR,
  LOG_IN,
  DELETE_ACCOUNT,
} from 'src/actions/auth';

import {
  SHELTER_ERRORS_ARRAY,
} from 'src/actions/shelters';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  regError: 0,
  passwordDelete: '',
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
        passwordDelete: action.name === 'passwordDelete' ? action.newValue : state.passwordDelete,
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

    /**
     * Display the overlay to confirm the delete of the account
     */
    case DELETE_ACCOUNT:
      return {
        ...state,
        regError: 7,
      };

    /**
     * Set the delete password value to none if there is an error when trying to delete the account
     */
    case SHELTER_ERRORS_ARRAY:
      return {
        ...state,
        passwordDelete: '',
      };

    default:
      return state;
  }
}

export default registerReducer;
