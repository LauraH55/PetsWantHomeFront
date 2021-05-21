import { connect } from 'react-redux';

import {
  updateUserField,
  changePasswordStatus,
  deleteAccount,
  deleteConfirm,
  deleteCancel,
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
  shelterModificationCity: state.shelter.shelterModificationCity,
  shelterModificationZip: state.shelter.shelterModificationZip,
  shelterModificationPhone: state.shelter.shelterModificationPhone,
  shelterModificationEmail: state.shelter.shelterModificationEmail,
  shelterUpdateError: state.shelter.shelterUpdateError,
  errorsArray: state.shelter.errorsArray,
  userActualPassword: state.auth.userActualPassword,
  userNewPassword: state.auth.userNewPassword,
  userConfirmPassword: state.auth.userConfirmPassword,
  passwordStatus: state.auth.passwordStatus,
  regError: state.register.regError,
  passwordDelete: state.register.passwordDelete,
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
   * Action to load the information of the shelter actually updating
   * @param {Object} profile Informations of the shelter
   */
  loadProfile: (profile) => {
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

  /**
   * Action to change the status of the modification of password
   */
  changePasswordStatus: () => {
    const action = changePasswordStatus();
    dispatch(action);
  },

  /**
   * Action to delete the user account
   */
  deleteAccount: () => {
    const action = deleteAccount();
    dispatch(action);
  },

  /**
   * Action to confirm the delete of the account with password
   */
  deleteConfirm: () => {
    const action = deleteConfirm();
    dispatch(action);
  },

  /**
   * Action to cancel the delete of the account
   */
  deleteCancel: () => {
    const action = deleteCancel();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(ShelterModification);
