// === Action Types

export const FETCH_SHELTERS= 'FETCH_SHELTERS';
export const SAVE_SHELTERS = 'SAVE_SHELTERS';
export const NEW_SHELTER_CREATION = 'NEW_SHELTER_CREATION';
export const SET_MODIFICATION_PROFILE = 'SET_MODIFICATION_PROFILE';
export const SUBMIT_SHELTER_MODIFICATION = 'SUBMIT_SHELTER_MODIFICATION';
export const UPDATE_SHELTER_IMAGE = 'UPDATE_SHELTER_IMAGE';
export const SHELTER_UPDATE_ERROR = 'SHELTER_UPDATE_ERROR';
export const SHELTER_UPDATE_SUCCESS = 'SHELTER_UPDATE_SUCCESS';
export const SHELTER_ERRORS_ARRAY = 'SHELTER_ERRORS_ARRAY';
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

/**
 * Action to dispatch to submit the updated informations of the shelter
 */
export const submitShelterModification = () => ({
  type: SUBMIT_SHELTER_MODIFICATION,
});

/**
 * Action if the picture of the shelter has been modified
 */
export const updateShelterImage = () => ({
  type: UPDATE_SHELTER_IMAGE,
});

/**
 * Action to display error messages if the update has failed
 */
export const shelterUpdateError = () => ({
  type: SHELTER_UPDATE_ERROR,
});

/**
 * Action to display error messages if the update has successed
 */
export const shelterUpdateSuccess = () => ({
  type: SHELTER_UPDATE_SUCCESS,
});

/**
 * 
 * Action to display the error messages when creating/updating a shelter
 */
export const shelterErrorsArray = (errorsArray) => ({
  type: SHELTER_ERRORS_ARRAY,
  errorsArray,
});
