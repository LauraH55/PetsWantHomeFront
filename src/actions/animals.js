// === Action Types
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';
export const FETCH_RANDOM_ANIMALS = 'FETCH_RANDOM_ANIMALS';
export const SAVE_RANDOM_ANIMALS = 'SAVE_RANDOM_ANIMALS';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
export const SAVE_UPDATE_ANIMAL = 'SAVE_UPDATE_ANIMAL';

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

/**
 * Action to set the modification status of an animal to update her/his informations,
    and set the informations
 */
export const updateAnimal = ({
  id,
  name,
  birthdate,
  status,
  gender,
  species,
  race,
  catCohabitation,
  childCohabitation,
  dogCohabitation,
  nacCohabitation,
  unknownCohabitation,
  description,
  picture,
}) => ({
  type: UPDATE_ANIMAL,
  id,
  name,
  birthdate,
  status,
  gender,
  species,
  race,
  catCohabitation,
  childCohabitation,
  dogCohabitation,
  nacCohabitation,
  unknownCohabitation,
  description,
  picture,
});

/**
 * Action to save the modifications to the informations of an animal
 */
export const saveUpdateAnimal = () => ({
  type: SAVE_UPDATE_ANIMAL,
});
