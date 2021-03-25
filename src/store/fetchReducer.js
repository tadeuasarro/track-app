import { SET_LOADING, SET_ERRORS } from '../actions/fetch';

const initialState = {
  loading: false,
  errors: false,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: action.payload,
        errors: false,
      };
    case SET_ERRORS:
      return {
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
