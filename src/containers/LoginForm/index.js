import { connect } from 'react-redux';

import {
  updateUserField,
  logIn,
} from 'src/actions/auth';

import LoginForm from 'src/components/LoginForm';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  loginError: state.auth.loginError,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action which will modify the value of an input
   * @param {string} value : Value entered in the input
   * @param {string} fieldName : Name of the input
   */
  changeField: (newValue, name) => {
    const action = updateUserField(newValue, name);
    dispatch(action);
  },

  /**
   * Submit the form when an user is connecting
   */
  handleLogin: () => {
    const action = logIn();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
