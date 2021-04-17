import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  LOG_OUT,
  LOGIN_ERROR,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  token: null,
  loginError: false,
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

    default:
      return state;
  }
}

export default authReducer;
