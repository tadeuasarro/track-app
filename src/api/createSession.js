import {
  createSessionPending, createSessionSuccess, createSessionError,
} from '../actions/session';

const url = 'https://enigmatic-everglades-24941.herokuapp.com/users';
const config = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

function createSession(username) {
  return dispatch => {
    dispatch(createSessionPending());
    fetch(`${url}/${username}`, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        const { username, id, target } = res;
        dispatch(createSessionSuccess({ username, id, target }));
        return res;
      })
      .catch(error => {
        dispatch(createSessionError(error));
      });
  };
}

export default createSession;
