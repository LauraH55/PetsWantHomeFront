import { connect } from 'react-redux';

import { fetchAnimals, fetchRandomAnimals } from 'src/actions/animals';
import { fetchShelters } from 'src/actions/shelters';

import App from 'src/components/App';


const mapStateToProps = (state) => ({
  loading: state.animals.loading,
  
});

const mapDispatchToProps = (dispatch) => ({
  loadAnimals: () => {
    const action = fetchAnimals();
    dispatch(action);
  },
  loadRandomAnimals: () => {
    const action = fetchRandomAnimals();
    dispatch(action);
  },
  loadShelters: () => {
    const action = fetchShelters();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
