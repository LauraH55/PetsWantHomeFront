import {
  SAVE_ANIMALS,
  SAVE_RANDOM_ANIMALS,
} from 'src/actions/animals';

import {
  SAVE_SHELTERS,
} from 'src/actions/shelters';

import {
  LOADER,
} from 'src/actions/auth';

const initialState = {
  animalsList: [],
  animalsRandomList: [],
  loading: true,
  waiting: 0,
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

    default:
      return state;
  }
}

export default animalsReducer;
