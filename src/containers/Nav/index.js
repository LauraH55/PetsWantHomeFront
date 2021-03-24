import { logOut } from 'src/actions/auth';

import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
