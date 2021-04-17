import { connect } from 'react-redux';

import Animal from 'src/components/Animal';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  animals: state.animals.animalsList,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Animal);
