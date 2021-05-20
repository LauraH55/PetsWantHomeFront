import {
  SAVE_ANIMALS,
  SAVE_RANDOM_ANIMALS,
  UPDATE_ANIMAL,
  SAVE_UPDATE_ANIMAL,
  ANIMAL_UPDATE_ERROR,
  SAVE_RACES,
  GENDER_FILTER,
  SPECIES_FILTER,
  ANIMAL_UPDATE_ERRORS_ARRAY,
  RACES_FILTER,
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
  racesList: [],
  loading: true,
  waiting: 0,
  id: '',
  name: '',
  actualName: '',
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
  actualPicture: '',
  modificationStatus: 0,
  errorsArray: {},
  filterGender: 0,
  filterSpecies: 0,
  filterRaces: 0,
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

    case SAVE_RACES:
      return {
        ...state,
        racesList: action.racesList,
        waiting: state.waiting - 1,
        loading: state.waiting - 1 !== 0,
      };

    /**
     * Set the informations to update for the form
     */
    case UPDATE_ANIMAL:
      return {
        ...state,
        id: action.id,
        name: action.name,
        actualName: action.name,
        birthdate: action.birthdate,
        status: action.status,
        gender: action.gender,
        species: action.species.id,
        race: action.race.id,
        catCohabitation: action.catCohabitation,
        childCohabitation: action.childCohabitation,
        dogCohabitation: action.dogCohabitation,
        nacCohabitation: action.nacCohabitation,
        unknownCohabitation: action.unknownCohabitation,
        description: action.description,
        picture: action.picture,
        actualPicture: action.picture,
      };

    /**
     * Set the modification status to success value
     */
    case SAVE_UPDATE_ANIMAL:
      return {
        ...state,
        modificationStatus: 1,
        errorsArray: {},
      };

    /**
     * Set the modification status to failure value
     */
    case ANIMAL_UPDATE_ERROR:
      return {
        ...state,
        modificationStatus: 2,
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

    /**
     * display the array of errors when updating/creating an animal profile
     */
    case ANIMAL_UPDATE_ERRORS_ARRAY:
      return {
        ...state,
        errorsArray: action.errorsArray,
      };

    /**
     * Filter the animals by gender
     */
    case GENDER_FILTER:
      return {
        ...state,
        filterGender: action.genderValue,
      };

    /**
     * Filter the animals by species
     */
    case SPECIES_FILTER:
      return {
        ...state,
        filterSpecies: action.speciesValue,
      };

    /**
     * Filter the animals by races
     */
    case RACES_FILTER:
      return {
        ...state,
        filterRaces: action.racesValue,
      };

    default:
      return state;
  }
}

export default animalsReducer;
