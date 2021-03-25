import { connect } from 'react-redux';

import Adoption from 'src/components/Adoption';

const mapStateToProps = (state) => ({
  animals: state.animals.animalsList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Adoption);
