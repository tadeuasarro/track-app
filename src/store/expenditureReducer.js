import { SET_EXPENDITURES } from '../actions/expenditure';
import filterExpenditures from '../helpers/filterExpenditures';

const initialState = {
  expenditures: false,
  summary: false,
};

const expenditureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENDITURES:
      const summary = action.payload ? filterExpenditures(action.payload) : [] ;
      return {
        expenditures: action.payload,
        summary: summary,
      }
      break;
    default:
      return state;
  }
};

export default expenditureReducer;
