import { SET_CURRENT_USER, UPDATE_CURRENT_USER} from '../actions/session';

const initialState = {
  user: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        user: action.payload
      }
    default:
      return state;
  }
};

export default sessionReducer;
