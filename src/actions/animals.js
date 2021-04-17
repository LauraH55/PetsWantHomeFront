// === Action Types
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';
export const FETCH_RANDOM_ANIMALS = 'FETCH_RANDOM_ANIMALS';
export const SAVE_RANDOM_ANIMALS = 'SAVE_RANDOM_ANIMALS';

// === Action Creators

/**
 * Action to get the animals list
 */
export const fetchAnimals = () => ({
  type: FETCH_ANIMALS,
});

/**
 * Action to set the animals list in the reducer to display it
 * @param {Object} animals List of all the animals
 */
export const saveAnimals = (animals) => ({
  type: SAVE_ANIMALS,
  animals: animals,
});

/**
 * Action to get the random animals list
 */
export const fetchRandomAnimals = () => ({
  type: FETCH_RANDOM_ANIMALS,
});

/**
 * Action to set the random animals list in the reducer to display it
 * @param {Object} randomAnimals List of the random animals
 */
export const saveRandomAnimals = (randomAnimals) => ({
  type: SAVE_RANDOM_ANIMALS,
  randomAnimals: randomAnimals,
});
