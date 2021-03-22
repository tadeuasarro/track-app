import { SET_CURRENT_USER, UPDATE_USER_TARGET } from '../actions/session';

const initialState = {
  username: false,
  id: false,
  target: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        username: action.payload.username,
        id: action.payload.id,
        target: action.payload.target,
      };
    case UPDATE_USER_TARGET:
      return {
        ...state,
        target: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
