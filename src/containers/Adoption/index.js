import { connect } from 'react-redux';

import { genderFilter } from 'src/actions/animals';

import Adoption from 'src/components/Adoption';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const adoptingAnimals = state.animals.animalsList.filter((animal) => animal.status == 1);

  

  let filteredByGender = adoptingAnimals;

  // if (state.animals.filterGender == 0) {
  //   filteredByGender = adoptingAnimals;
  // }

  if (state.animals.filterGender != 0) {
    filteredByGender = adoptingAnimals.filter((animal) => animal.gender == state.animals.filterGender);
  }


  console.log(filteredByGender);

  const animals = filteredByGender.map((animal) => ({
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
  genderFilter: (genderValue) => {
    const action = genderFilter(genderValue);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Adoption);
