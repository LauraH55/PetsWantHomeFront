import { connect } from 'react-redux';

import Adoption from 'src/components/Adoption';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const animals = state.animals.animalsList.map((animal) => ({
    id: animal.id,
    picture: animal.picture,
    name: animal.name,
    race: animal.race !== null ? animal.race.name : '',
    birthdate: animal.birthdate,
    gender: animal.gender,
  }));

  return {
    animals,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Adoption);

/*
animals: {
    id: state.animals.animalList.id,
    picture: state.animals.animalList.picture,
    name: state.animals.animalList.name,
    race: state.animals.animalList.race.name,
    birthdate: state.animals.animalList.birthdate,
    gender: state.animals.animalList.gender,
  },
  */
