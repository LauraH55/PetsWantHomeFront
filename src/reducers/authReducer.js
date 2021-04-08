import { UPDATE_USER_FIELD, SAVE_USER, LOG_OUT, LOGIN_ERROR } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  token: null,
  loginError: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: '',
        password: '',
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    
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
