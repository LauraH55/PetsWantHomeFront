import { connect } from 'react-redux';

import {
  animalUpdated,
  updateAnimal,
} from 'src/actions/animals';

import {
  updateUserField,
} from 'src/actions/auth';

import { getInfoBirthDate } from 'src/utils';

import AnimalModification from 'src/components/AnimalModification';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  actualName: state.animals.actualName,
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
  animalModificationPicture: state.animals.actualPicture,
  animalsList: state.animals.animalsList,
  modificationStatus: state.animals.modificationStatus,
  racesList: state.animals.racesList,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action which will save the update of the informations for an animal
   */
  saveUpdateAnimal: () => {
    const action = animalUpdated();
    dispatch(action);
  },

  /**
   * Action which will modify the value of an input
   * @param {string} value : Value entered in the input
   * @param {string} fieldName : Name of the input
   */
  changeField: (value, fieldName) => {
    const action = updateUserField(value, fieldName);
    dispatch(action);
  },

  /**
   * Action which will set the modification status to true to update an animal informations
   */
  updateAnimal: (animalToUpdate) => {
    const action = updateAnimal(animalToUpdate);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(AnimalModification);
