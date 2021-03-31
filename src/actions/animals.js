// === action types
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';
export const FETCH_RANDOM_ANIMALS = 'FETCH_RANDOM_ANIMALS';
export const SAVE_RANDOM_ANIMALS = 'SAVE_RANDOM_ANIMALS';
export const LOADER = 'LOADER';

// === action creators
export const fetchAnimals = () => ({
  type: FETCH_ANIMALS,
});

export const saveAnimals = (animals) => ({
  type: SAVE_ANIMALS,
  animals: animals,
});

export const fetchRandomAnimals = () => ({
  type: FETCH_RANDOM_ANIMALS,
});

export const saveRandomAnimals = (randomAnimals) => ({
  type: SAVE_RANDOM_ANIMALS,
  randomAnimals: randomAnimals,
});

export const loader = () => ({
  type: LOADER,
});
