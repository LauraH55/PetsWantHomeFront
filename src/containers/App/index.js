import { connect } from 'react-redux';

import {
  fetchAnimals,
  fetchRandomAnimals,
} from 'src/actions/animals';

import {
  fetchShelters,
} from 'src/actions/shelters';

import App from 'src/components/App';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  loading: state.animals.loading,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action to make the request to get the animals list
   */
  loadAnimals: () => {
    const action = fetchAnimals();
    dispatch(action);
  },

  /**
   * Action to make the request to get the random animals list
   */
  loadRandomAnimals: () => {
    const action = fetchRandomAnimals();
    dispatch(action);
  },

  /**
   * Action to make the request to get the shelters list
   */
  loadShelters: () => {
    const action = fetchShelters();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
