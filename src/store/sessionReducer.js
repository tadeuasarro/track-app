import { CREATE_SESSION, ERASE_SESSION } from '../actions/index';

const initialState = {
  username: false,
};

const sessionReducer = (state = initialState, action) => {
  console.log('this is working');
  switch (action.type) {
    case CREATE_SESSION:
      return { ...state, username: action.payload };
    case ERASE_SESSION:
      return { ...state, username: false };
    default:
      return state;
  }
};

export default sessionReducer;
