import { SET_CURRENT_USER, UPDATE_CURRENT_USER} from '../actions/session';

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
    default:
      return state;
  }
};

export default sessionReducer;
