import {
  SAVE_ANIMALS,
  SAVE_RANDOM_ANIMALS,
  UPDATE_ANIMAL,
  SAVE_UPDATE_ANIMAL,
} from 'src/actions/animals';

import {
  SAVE_SHELTERS,
} from 'src/actions/shelters';

import {
  LOADER,
  UPDATE_USER_FIELD,
} from 'src/actions/auth';

const initialState = {
  animalsList: [],
  animalsRandomList: [],
  loading: true,
  waiting: 0,
  modificationStatus: false,
  id: '',
  name: '',
  birthdate: '',
  status: '',
  gender: '',
  species: '',
  race: '',
  catCohabitation: '',
  childCohabitation: '',
  dogCohabitation: '',
  nacCohabitation: '',
  unknownCohabitation: '',
  description: '',
  picture: '',
};

function animalsReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Activate the loading screen
     */
    case LOADER:
      return {
        ...state,
        loading: true,
        waiting: state.waiting + 1,
      };

    /**
     * Get the list of all the animals
     */
    case SAVE_ANIMALS:
      return {
        ...state,
        animalsList: action.animals,
        waiting: state.waiting - 1,
        loading: state.waiting - 1 !== 0,
      };

    /**
     * Get a random list of animals
     */
    case SAVE_RANDOM_ANIMALS:
      return {
        ...state,
        animalsRandomList: action.randomAnimals,
        waiting: state.waiting - 1,
        loading: state.waiting - 1 !== 0,
      };

    /**
     * Decrese the waiting number for the loader
     */
    case SAVE_SHELTERS:
      return {
        ...state,
        waiting: state.waiting - 1,
        loading: state.waiting - 1 !== 0,
      };

    /**
     * Set the modifications status to true to display the modification form
     */
    case UPDATE_ANIMAL:
      return {
        ...state,
        modificationStatus: true,
        id: action.id,
        name: action.name,
        birthdate: action.birthdate,
        status: action.status,
        gender: action.gender,
        species: action.species,
        race: action.race,
        catCohabitation: action.catCohabitation,
        childCohabitation: action.childCohabitation,
        dogCohabitation: action.dogCohabitation,
        nacCohabitation: action.nacCohabitation,
        unknownCohabitation: action.unknownCohabitation,
        description: action.description,
        picture: action.picture,
      };

    /**
     * Set the modifications status to false to hide the modification form
     */
    case SAVE_UPDATE_ANIMAL:
      return {
        ...state,
        modificationStatus: false,
      };

    /**
     * Update the new shelter creation fields' value
     */
    case UPDATE_USER_FIELD:
      return {
        ...state,
        name: action.name === 'animalModificationName' ? action.newValue : state.name,
        birthdate: action.name === 'animalModificationBirthdate' ? action.newValue : state.birthdate,
        status: action.name === 'animalModificationStatus' ? action.newValue : state.status,
        gender: action.name === 'animalModificationGender' ? action.newValue : state.gender,
        species: action.name === 'animalModificationSpecies' ? action.newValue : state.species,
        race: action.name === 'animalModificationRace' ? action.newValue : state.race,
        catCohabitation: action.name === 'animalModificationCatCohabitation' ? action.newValue : state.catCohabitation,
        childCohabitation: action.name === 'animalModificationChildCohabitation' ? action.newValue : state.childCohabitation,
        dogCohabitation: action.name === 'animalModificationDogCohabitation' ? action.newValue : state.dogCohabitation,
        nacCohabitation: action.name === 'animalModificationNacCohabitation' ? action.newValue : state.nacCohabitation,
        unknownCohabitation: action.name === 'animalModificationUnknownCohabitation' ? action.newValue : state.unknownCohabitation,
        description: action.name === 'animalModificationdescription' ? action.newValue : state.description,
        picture: action.name === 'animalModificationPicture' ? action.newValue : state.picture,
      };

    default:
      return state;
  }
}

export default animalsReducer;
