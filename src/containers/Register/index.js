import { logOut } from 'src/actions/auth';

import { connect } from 'react-redux';

import { updateUserField, newUser } from 'src/actions/auth';
import Register from 'src/components/Register';

const mapStateToProps = (state) => ({
    email: state.register.email,
    password: state.register.password,
    confirmPassword: state.register.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, fieldName) => {
        dispatch(updateUserField(value, fieldName));
    },
    handleLogin: () => {
        console.log('click');
        dispatch(newUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
