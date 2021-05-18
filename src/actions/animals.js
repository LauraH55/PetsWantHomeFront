// === Action Types
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';
export const FETCH_RANDOM_ANIMALS = 'FETCH_RANDOM_ANIMALS';
export const SAVE_RANDOM_ANIMALS = 'SAVE_RANDOM_ANIMALS';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
export const ANIMAL_UPDATED = 'ANIMAL_UPDATED';
export const SAVE_UPDATE_ANIMAL = 'SAVE_UPDATE_ANIMAL';
export const UPDATE_ANIMAL_IMAGE = 'UPDATE_ANIMAL_IMAGE';
export const ANIMAL_UPDATE_ERROR = 'ANIMAL_UPDATE_ERROR';
export const SET_ARCHIVE_ANIMAL = 'SET_ARCHIVE_ANIMAL';
export const FETCH_RACES = 'FETCH_RACES';
export const SAVE_RACES = 'SAVE_RACES';
export const ANIMAL_CREATED = 'ANIMAL_CREATED';
export const ANIMAL_CREATION = 'ANIMAL_CREATION';
export const GENDER_FILTER = 'GENDER_FILTER';
export const SPECIES_FILTER = 'SPECIES_FILTER';

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
 * Action to set the request to the API to update the animal's informations
 */
export const animalUpdated = () => ({
  type: ANIMAL_UPDATED,
});

/**
 * Action to save the modifications to the informations of an animal
 */
export const saveUpdateAnimal = () => ({
  type: SAVE_UPDATE_ANIMAL,
});

/**
 * Action to update the image of an animal if it has been changed
 */
export const updateAnimalImage = () => ({
  type: UPDATE_ANIMAL_IMAGE,
});

/**
 * Action to display the update error message when updating the informations of an animal
 */
export const animalUpdateError = () => ({
  type: ANIMAL_UPDATE_ERROR,
});

/**
 * Action to archive an animal after being adopted
 * @param {Number} id ID of the selected animal
 * @param {Number} status Future adoption status for the animal (not the actual one)
 */
export const setArchiveAnimal = (id, status) => ({
  type: SET_ARCHIVE_ANIMAL,
  id,
  status,
});

/**
 * Action to get the list of all the animal races
 */
export const fetchRaces = () => ({
  type: FETCH_RACES,
});

/**
 * Action to display all the animal races
 * @param {Array} racesList List of all the races
 */
export const saveRaces = (racesList) => ({
  type: SAVE_RACES,
  racesList,
});

/**
 * Action validate in the reducer the creation of the new animal
 */
export const animalCreated = () => ({
  type: ANIMAL_CREATED,
});

/**
 * Action to set the request to the API to create the new animal's profile
 */
export const animalCreation = () => ({
  type: ANIMAL_CREATION,
});

export const genderFilter = (genderValue) => ({
  type: GENDER_FILTER,
  genderValue,
});

export const speciesFilter = (speciesValue) => ({
  type: SPECIES_FILTER,
  speciesValue,
});
