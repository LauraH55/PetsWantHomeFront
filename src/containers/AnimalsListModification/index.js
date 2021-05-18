import { connect } from 'react-redux';

import {
  setArchiveAnimal,
} from 'src/actions/animals';

import AnimalsListModification from 'src/components/AnimalsListModification';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  animalsList: state.animals.animalsList,
  sheltersList: state.shelter.sheltersList,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Function to archive an animal after being adopted
   * @param {*} id ID of the selected animal
   */
  archiveAnimal: (id) => {
    const action = setArchiveAnimal(id, 2);
    dispatch(action);
  },

  /**
   * Function to desarchive an animal if he returned to the shelter
   * @param {*} id ID of the selected animal
   */
  desarchiveAnimal: (id) => {
    const action = setArchiveAnimal(id, 1);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsListModification);
