import {
  CREATE_SESSION_SUCCESS, CREATE_SESSION_PENDING, CREATE_SESSION_ERROR, ERASE_SESSION,
} from '../actions/session';

const initialState = {
  pending: false,
  expenditures: false,
  error: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_PENDING:
      return { ...state, pending: true, error: false };
    case CREATE_SESSION_SUCCESS:
      return {
        pending: false,
        username: action.payload.username,
        id: action.payload.id,
        error: false,
      };
    case CREATE_SESSION_ERROR:
      return { ...state, pending: false, error: action.payload };
    case ERASE_SESSION:
      return {
        ...state,
        username: false,
        id: false,
        error: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
