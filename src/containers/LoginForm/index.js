import { updateUserField, logIn } from 'src/actions/auth';

import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
