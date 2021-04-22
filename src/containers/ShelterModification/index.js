import { connect } from 'react-redux';

import {
  updateUserField,
  loader,
} from 'src/actions/auth';

import {
  setModificationProfile,
  submitShelterModification,
} from 'src/actions/shelters';

import ShelterModification from 'src/components/ShelterModification';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  shelters: state.shelter.sheltersList,
  shelterModificationName: state.shelter.shelterModificationName,
  shelterModificationAdress: state.shelter.shelterModificationAdress,
  shelterModificationPhone: state.shelter.shelterModificationPhone,
  shelterModificationEmail: state.shelter.shelterModificationEmail,
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
   * Action to load the information of the shelter actually updating
   * @param {Object} profile Informations of the shelter
   */
  loadProfile: (profile) => {
    dispatch(loader());
    const action = setModificationProfile(profile);
    dispatch(action);
  },

  /**
   * Action to submit the new updated informations of the shelter
   */
  submitModification: () => {
    const action = submitShelterModification();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(ShelterModification);
