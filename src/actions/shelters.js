// === Action Types

export const FETCH_SHELTERS= 'FETCH_SHELTERS';
export const SAVE_SHELTERS = 'SAVE_SHELTERS';
export const NEW_SHELTER_CREATION = 'NEW_SHELTER_CREATION';

// === Action Creators

/**
 * Action to get the shelters list
 */
export const fetchShelters = () => ({
  type: FETCH_SHELTERS,
});

/**
 * Action to set the shelters list in the reducer to display it
 * @param {Object} shelters List of all the shelters
 */
export const saveShelters = (shelters) => ({
  type: SAVE_SHELTERS,
  shelters,
});

/**
 * Action to dispatch when a new shelter is created
 */
export const newShelterCreation = () => ({
  type: NEW_SHELTER_CREATION,
});
