export const CREATE_SESSION_PENDING = 'CREATE_SESSION_PENDING';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_ERROR = 'CREATE_SESSION_ERROR';
export const ERASE_SESSION = 'ERASE_SESSION';

export const createSessionPending = () => ({
  type: CREATE_SESSION_PENDING,
});

export const createSessionSuccess = ({ username, id }) => ({
  type: CREATE_SESSION_SUCCESS,
  payload: { username, id },
});

export const createSessionError = error => ({
  type: CREATE_SESSION_ERROR,
  payload: error,
});

export const eraseSession = () => ({
  type: ERASE_SESSION,
});
