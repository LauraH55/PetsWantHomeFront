import { connect } from 'react-redux';

import { updateUserField, newUser } from 'src/actions/auth';
import Register from 'src/components/Register';

const mapStateToProps = (state) => ({
    email: state.register.email,
    password: state.register.password,
    confirmPassword: state.register.confirmPassword,
    emailError: state.register.emailError,
    passwordError: state.register.passwordError,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, fieldName) => {
        console.log(fieldName, value);
        dispatch(updateUserField(value, fieldName));
    },
    handleLogin: () => {
        dispatch(newUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
