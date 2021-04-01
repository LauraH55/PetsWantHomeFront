import { connect } from 'react-redux';

import Shelter from 'src/components/Shelter';

const mapStateToProps = (state) => ({
  shelters: state.shelter.sheltersList,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Shelter);
