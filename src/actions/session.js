export const CREATE_SESSION_PENDING = 'CREATE_SESSION_PENDING';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_ERROR = 'CREATE_SESSION_ERROR';
export const ERASE_SESSION = 'ERASE_SESSION';
export const UPDATE_TARGET = 'UPDATE_TARGET';

export const createSessionPending = () => ({
  type: CREATE_SESSION_PENDING,
});

export const createSessionSuccess = user => ({
  type: CREATE_SESSION_SUCCESS,
  payload: user,
});

export const createSessionError = error => ({
  type: CREATE_SESSION_ERROR,
  payload: error,
});

export const eraseSession = () => ({
  type: ERASE_SESSION,
});

export const updateTarget = target => ({
  type: UPDATE_TARGET,
  payload: target,
});
