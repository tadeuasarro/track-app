import {
  INDEX_EXPENDITURES_PENDING,
  INDEX_EXPENDITURES_SUCCESS,
  INDEX_EXPENDITURES_ERROR,
  ERASE_EXPENDITURE,
} from '../actions/expenditure';

const initialState = {
  pending: false,
  expenditures: false,
  error: false,
};

const expenditureReducer = (state = initialState, action) => {
  switch (action.type) {
    case INDEX_EXPENDITURES_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      };
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
    case ERASE_EXPENDITURE:
      return {
        ...state,
        expenditures: false,
      };
    default:
      return state;
  }
};

export default expenditureReducer;
