import { connect } from 'react-redux';

import SheltersList from 'src/components/SheltersList';

const mapStateToProps = (state) => ({
  shelters: state.shelter.sheltersList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SheltersList);
