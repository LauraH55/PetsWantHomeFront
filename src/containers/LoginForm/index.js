import { updateUserField, logIn } from 'src/actions/auth';

import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    console.log('C\'est le moment de se déconnecter');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
