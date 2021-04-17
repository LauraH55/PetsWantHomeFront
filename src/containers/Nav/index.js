import { connect } from 'react-redux';

import {
  logOut,
} from 'src/actions/auth';

import Nav from 'src/components/Nav';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action when an user disconnects
   */
  handleLogout: () => {
    const action = logOut();
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
