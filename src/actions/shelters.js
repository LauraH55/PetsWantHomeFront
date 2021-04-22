// === Action Types

export const FETCH_SHELTERS= 'FETCH_SHELTERS';
export const SAVE_SHELTERS = 'SAVE_SHELTERS';
export const NEW_SHELTER_CREATION = 'NEW_SHELTER_CREATION';
export const SET_MODIFICATION_PROFILE = 'SET_MODIFICATION_PROFILE';

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

/**
 * Action to dispatch to get the main informations of a shelter to update them
 * @param {Object} profile Informations of the profile to update shelter's informations
 */
export const setModificationProfile = (profile) => ({
  type: SET_MODIFICATION_PROFILE,
  profile,
});
