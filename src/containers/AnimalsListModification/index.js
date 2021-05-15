import { connect } from 'react-redux';

import { updateAnimal } from 'src/actions/animals';

import AnimalsListModification from 'src/components/AnimalsListModification';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  animalsList: state.animals.animalsList,
  sheltersList: state.shelter.sheltersList,
  modificationStatus: state.animals.modificationStatus,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action which will set the modification status to true to update an animal informations
   */
  updateAnimal: (animalToUpdate) => {
    const action = updateAnimal(animalToUpdate);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsListModification);
