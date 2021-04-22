import { connect } from 'react-redux';

import ShelterModification from 'src/components/ShelterModification';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  shelters: state.shelter.sheltersList,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(ShelterModification);
