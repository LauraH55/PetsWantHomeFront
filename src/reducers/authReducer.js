import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  LOG_OUT,
  LOGIN_ERROR,
  CHANGE_PASSWORD_STATUS,
} from 'src/actions/auth';

import {
  SHELTER_UPDATE_SUCCESS,
} from 'src/actions/shelters';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  token: null,
  loginError: false,
  userActualPassword: '',
  userNewPassword: '',
  userConfirmPassword: '',
  passwordStatus: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Update the authentificator fields' value
     */
    case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
        userActualPassword: action.name === 'userActualPassword' ? action.newValue : state.userActualPassword,
        userNewPassword: action.name === 'userNewPassword' ? action.newValue : state.userNewPassword,
        userConfirmPassword: action.name === 'userConfirmPassword' ? action.newValue : state.userConfirmPassword,
      };

    /**
     * Set the logged status as true when the user is connected
     */
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: '',
        password: '',
      };

    /**
     * Log out the user
     */
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };

    /**
     * Display the authentification error message
     */
    case LOGIN_ERROR:
      return {
        ...state,
        password: '',
        loginError: true,
      };

    /**
     * Set the password status to true/false to display/hide the form to update the password
     */
    case CHANGE_PASSWORD_STATUS:
      return {
        ...state,
        passwordStatus: !state.passwordStatus,
      };

    /**
     * Update the user's informations/password
     */
    case SHELTER_UPDATE_SUCCESS:
      return {
        ...state,
        userActualPassword: '',
        userNewPassword: '',
        userConfirmPassword: '',
        passwordStatus: false,
      };

    default:
      return state;
  }
}

export default authReducer;
