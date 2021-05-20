import { connect } from 'react-redux';

import { genderFilter, speciesFilter, racesFilter } from 'src/actions/animals';

import Adoption from 'src/components/Adoption';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const adoptingAnimals = state.animals.animalsList.filter((animal) => animal.status == 1);

  let filteredAnimals = adoptingAnimals;
  let { racesList } = state.animals;

  if (state.animals.filterGender != 0) {
    filteredAnimals = filteredAnimals.filter(
      (animal) => animal.gender == state.animals.filterGender,
    );
  }

  if (state.animals.filterSpecies != 0) {
    filteredAnimals = filteredAnimals.filter(
      (animal) => animal.species.id == state.animals.filterSpecies,
    );

    racesList = racesList.filter(
      (race) => race.species.id == state.animals.filterSpecies,
    );
  }

  if (state.animals.filterRaces != 0) {
    filteredAnimals = filteredAnimals.filter(
      (animal) => animal.race !== null && animal.race.id == state.animals.filterRaces,
    );
  }

  const animals = filteredAnimals.map((animal) => ({
    id: animal.id,
    picture: animal.picture,
    name: animal.name,
    race: animal.race !== null ? animal.race.name : '',
    birthdate: animal.birthdate,
    gender: animal.gender,
  }));

  return {
    animals,
    genderValue: state.animals.filterGender,
    speciesValue: state.animals.filterSpecies,
    racesValue: state.animals.filterRaces,
    racesList,
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

  speciesFilter: (speciesValue) => {
    const action = speciesFilter(speciesValue);
    dispatch(action);
  },

  racesFilter: (racesValue) => {
    const action = racesFilter(racesValue);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Adoption);
