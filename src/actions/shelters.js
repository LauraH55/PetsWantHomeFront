// === action types
export const FETCH_SHELTERS= 'FETCH_SHELTERS';
export const SAVE_SHELTERS = 'SAVE_SHELTERS';

// === action creators
export const fetchShelters = () => ({
  type: FETCH_SHELTERS,
});

export const saveShelters = (shelters) => ({
  type: SAVE_SHELTERS,
  shelters,
});
