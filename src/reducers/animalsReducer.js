import { SAVE_ANIMALS } from 'src/actions/animals';

const initialState = {
  animalsList: [],
};

function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ANIMALS:
      return {
        ...state,
        animalsList: action.animals,
      };
    default:
      return state;
  }
}
export default animalsReducer;
