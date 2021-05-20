import { connect } from 'react-redux';

import {
  animalCreation,
} from 'src/actions/animals';

import {
  updateUserField,
} from 'src/actions/auth';

import { getInfoBirthDate } from 'src/utils';

import AnimalCreation from 'src/components/AnimalCreation';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  animalModificationName: state.animals.name,
  animalModificationBirthdate: getInfoBirthDate(state.animals.birthdate),
  animalModificationStatus: state.animals.status,
  animalModificationGender: state.animals.gender,
  animalModificationSpecies: state.animals.species,
  animalModificationRace: state.animals.race,
  animalModificationCatCohabitation: state.animals.catCohabitation,
  animalModificationChildCohabitation: state.animals.childCohabitation,
  animalModificationDogCohabitation: state.animals.dogCohabitation,
  animalModificationNacCohabitation: state.animals.nacCohabitation,
  animalModificationUnknownCohabitation: state.animals.unknownCohabitation,
  animalModificationdescription: state.animals.description,
  creationStatus: state.animals.modificationStatus,
  racesList: state.animals.racesList,
  sheltersList: state.shelter.sheltersList,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action which will save the creation of the informations for the new animal
   */
  saveCreationAnimal: () => {
    const action = animalCreation();
    dispatch(action);
  },

  /**
   * Action which will modify the value of an input
   * If it's the species input there may be a double dispatch :
   *      - One for the actual species field
   *      - One for the race value if the species field selected is NAC
   * @param {string} value : Value entered in the input
   * @param {string} fieldName : Name of the input
   */
  changeField: (value, fieldName) => {
    const action = updateUserField(value, fieldName);

    if (fieldName === 'animalModificationSpecies' && value === '3') {
      const actionBis = updateUserField(0, 'animalModificationRace');
      dispatch(actionBis);
    }

    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(AnimalCreation);
