import {
  createSessionPending, createSessionSuccess, createSessionError,
} from '../actions/session';

const url = 'http://localhost:5000/users/';
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
        console.log(res);
        dispatch(createSessionSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(createSessionError(error));
      });
  };
}

export default createSession;
