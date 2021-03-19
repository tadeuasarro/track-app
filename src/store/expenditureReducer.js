import { SET_EXPENDITURES } from '../actions/expenditure';

const initialState = {
  expenditures: false,
  summary: false,
};

const expenditureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENDITURES:
      return {
        expenditures: action.payload.res,
        summary: action.payload.summary,
      }
      break;
    default:
      return state;
  }
};

export default expenditureReducer;
