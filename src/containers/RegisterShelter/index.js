import { connect } from 'react-redux';

import { updateUserField, newShelterCreation } from 'src/actions/auth';
import RegisterShelter from 'src/components/RegisterShelter';

const mapStateToProps = (state) => ({
    email: state.shelter.email,
    password: state.shelter.password,
    shelter: state.shelter.shelter,
    confirmPassword: state.shelter.confirmPassword,
    address: state.shelter.address,
    phoneNumber: state.shelter.phoneNumber,
    picture: state.shelter.picture,
});

//console.log(mapStateToProps);

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, fieldName) => {
        dispatch(updateUserField(value, fieldName));
    },
    handleLogin: () => {
        console.log('click');
        dispatch(newShelterCreation());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterShelter);
