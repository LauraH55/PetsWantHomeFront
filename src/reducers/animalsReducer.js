import {
  SAVE_ANIMALS,
  SAVE_RANDOM_ANIMALS,
  loader,
} from 'src/actions/animals';

const initialState = {
  animalsList: [],
  animalsRandomList: [],
  loading: true,
};

function animalsReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Activate the loading screen
     */
    case loader:
      return {
        ...state,
        loading: true,
      };

    /**
     * Get the list of all the animals
     */
    case SAVE_ANIMALS:
      return {
        ...state,
        animalsList: action.animals,
        loading: false,
      };

    /**
     * Get a random list of animals
     */
    case SAVE_RANDOM_ANIMALS:
      return {
        ...state,
        animalsRandomList: action.randomAnimals,
        loading: false,
      };

    default:
      return state;
  }
}

export default animalsReducer;
