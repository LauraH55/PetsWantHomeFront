export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const NEW_SHELTER_CREATION = 'NEW_SHELTER_CREATION';
export const NEW_USER = 'NEW_USER';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (isLogged, token) => ({
  type: SAVE_USER,
  isLogged,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const newShelterCreation = () => ({
  type: NEW_SHELTER_CREATION,
});

export const newUser = () => ({
  type: NEW_USER,
});
