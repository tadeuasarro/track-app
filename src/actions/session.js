export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UPDATE_TARGET = 'UPDATE_TARGET';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const updateCurrentUser = target => ({
  type: UPDATE_CURRENT_USER,
  payload: target,
});
