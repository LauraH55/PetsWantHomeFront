import { connect } from 'react-redux';

import { fetchAnimals } from 'src/actions/animals';

import App from 'src/components/App';


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  loadAnimals: () => {
    const action = fetchAnimals();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
