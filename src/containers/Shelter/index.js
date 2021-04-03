import { connect } from 'react-redux';
import { fetchAnimals } from 'src/actions/animals';
import { fetchShelters } from 'src/actions/shelters';

import Shelter from 'src/components/Shelter';

const mapStateToProps = (state) => ({
  shelters: state.shelter.sheltersList,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Shelter);
