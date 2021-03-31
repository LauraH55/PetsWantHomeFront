import { logOut } from 'src/actions/auth';

import { connect } from 'react-redux';

import { updateUserField, newShelterCreation } from 'src/actions/auth';
import Register from 'src/components/Register';

const mapStateToProps = (state) => ({
    email: state.register.email,
    password: state.register.password,
    //shelter: state.register.shelter,
    confirmPassword: state.register.confirmPassword,
    //address: state.register.address,
    //phoneNumber: state.register.phoneNumber,
    //picture: state.register.picture,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, fieldName) => {
        dispatch(updateUserField(value, fieldName));
    },
    handleLogin: () => {
        console.log('click');
        dispatch(newShelterCreation());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
