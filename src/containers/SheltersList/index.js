import { connect } from 'react-redux';

import SheltersList from 'src/components/SheltersList';

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
export default connect(mapStateToProps, mapDispatchToProps)(SheltersList);
