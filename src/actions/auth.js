export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});
