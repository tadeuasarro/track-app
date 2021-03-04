import {
  INDEX_EXPENDITURES_PENDING, INDEX_EXPENDITURES_SUCCESS, INDEX_EXPENDITURES_ERROR,
} from '../actions/expenditure';

const initialState = {
  pending: false,
  expenditures: false,
  error: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INDEX_EXPENDITURES_PENDING:
      return { ...state, pending: true, error: false };
    case INDEX_EXPENDITURES_SUCCESS:
      return {
        pending: false,
        expenditures: action.payload,
        error: false,
      };
    case INDEX_EXPENDITURES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
