import {
  CREATE_SESSION_SUCCESS, CREATE_SESSION_PENDING, CREATE_SESSION_ERROR, ERASE_SESSION,
} from '../actions/session';

const initialState = {
  pending: false,
  username: false,
  error: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_PENDING:
      return { ...state, pending: true }
    case CREATE_SESSION_SUCCESS:
      return { ...state, pending: false, username: action.payload };
    case CREATE_SESSION_ERROR:
      return { ...state, pending: false, error: action.payload };
    case ERASE_SESSION:
      return { ...state, username: false };
    default:
      return state;
  }
};

export default sessionReducer;
