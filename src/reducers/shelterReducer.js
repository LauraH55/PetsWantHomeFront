 import { UPDATE_USER_FIELD, SAVE_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
    email: '',
    password: '',
    shelter: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    picture: '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
