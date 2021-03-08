import {
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_PENDING,
  CREATE_SESSION_ERROR,
  ERASE_SESSION,
  UPDATE_TARGET,
} from '../actions/session';

const initialState = {
  pending: false,
  user: false,
  error: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_PENDING:
      return { ...state, pending: true, error: false };
    case CREATE_SESSION_SUCCESS:
      return {
        pending: false,
        user: action.payload,
        error: false,
      };
    case CREATE_SESSION_ERROR:
      return { ...state, pending: false, error: action.payload };
    case ERASE_SESSION:
      return {
        ...state,
        user: false,
        error: false,
      };
    case UPDATE_TARGET:
      return {
        ...state,
        target: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
