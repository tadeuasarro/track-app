export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UPDATE_USER_TARGET = 'UPDATE_USER_TARGET';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const updateUserTarget = target => ({
  type: UPDATE_USER_TARGET,
  payload: target,
});
