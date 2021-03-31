import { SAVE_ANIMALS, SAVE_RANDOM_ANIMALS, loader } from 'src/actions/animals';

const initialState = {
  animalsList: [],
  animalsRandomList: [],
  loading: true,
};

function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case loader:
      return {
        ...state,
        loading: true,
      };
    case SAVE_ANIMALS:
      return {
        ...state,
        animalsList: action.animals,
        loading: false,
      };
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
