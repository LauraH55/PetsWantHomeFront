import { connect } from 'react-redux';

import {
  regError,
} from 'src/actions/auth';

import Home from 'src/components/Home';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  randomAnimals: state.animals.animalsRandomList,
  regError: state.register.regError,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  closeSuccess: () => {
    const action = regError(0);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
