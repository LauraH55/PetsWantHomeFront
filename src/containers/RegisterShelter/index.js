import { connect } from 'react-redux';

import {
  updateUserField,
  newShelterCreation,
} from 'src/actions/auth';

import RegisterShelter from 'src/components/RegisterShelter';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  email: state.shelter.email,
  name: state.shelter.name,
  address: state.shelter.address,
  phone_number: state.shelter.phone_number,
  picture: state.shelter.picture,
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
    const action = updateUserField(value, fieldName);
    dispatch(action);
  },

  /**
   * Submit the form when a new shelter is created
   */
  handleLogin: () => {
    const action = newShelterCreation();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(RegisterShelter);
