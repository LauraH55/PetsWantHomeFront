import { UPDATE_USER_FIELD, SAVE_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  token: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      if (action.name === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      };

      case SAVE_USER:
        return {
          ...state,
          isLogged: action.isLogged,
          token: action.token,
          // on en profite pour vider les champs
          email: '',
          password: '',
        };
  
      case LOG_OUT:
        return {
          ...state,
          isLogged: false,
          token: null,
        };

    default:
      return state;
  }
}

export default authReducer;
