import { SET_CURRENT_USER, UPDATE_USER_TARGET} from '../actions/session';

const initialState = {
  username: false,
  id: false,
  target: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { id, username, target } = action.payload
      return {
        username : username,
        id: id,
        target: target,
      }
    case UPDATE_USER_TARGET:
      return {
        ...state,
        target: action.payload,
      }
    default:
      return state;
  }
};

export default sessionReducer;
