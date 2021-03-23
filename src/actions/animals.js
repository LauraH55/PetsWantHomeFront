// === action types
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';

// === action creators
export const fetchAnimals = () => ({
  type: FETCH_ANIMALS,
});

export const saveAnimals = (animals) => ({
  type: SAVE_ANIMALS,
  animals: animals,
});
