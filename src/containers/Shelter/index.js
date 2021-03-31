import { connect } from 'react-redux';

import Shelter from 'src/components/Shelter';

const mapStateToProps = (state) => ({
  animals: state.animals.animalsList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Shelter);
