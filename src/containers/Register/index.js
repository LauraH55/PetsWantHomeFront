import { connect } from 'react-redux';

import {
  updateUserField,
  newUser,
} from 'src/actions/auth';

import Register from 'src/components/Register';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  emailError: state.register.emailError,
  passwordError: state.register.passwordError,
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
  changeField: (value, fieldName) => {
    console.log(fieldName, value);
    const action = updateUserField(value, fieldName);
    dispatch(action);
  },

  /**
   * Submit the form when a new user is created
   */
  handleLogin: () => {
    const action = newUser();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Register);
