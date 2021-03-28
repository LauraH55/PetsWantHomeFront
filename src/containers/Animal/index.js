import { connect } from 'react-redux';

import Animal from 'src/components/Animal';

const mapStateToProps = (state) => ({
  animals: state.animals.animalsList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
