export const CREATE_SESSION = 'CREATE_SESSION';
export const ERASE_SESSION = 'ERASE_SESSION';

export const createSession = username => ({
  type: CREATE_SESSION,
  payload: username,
});

export const eraseSession = () => ({
  type: ERASE_SESSION,
});
