import { SET_EXPENDITURES } from '../actions/expenditure';
import filterExpenditures from '../helpers/filterExpenditures';

const initialState = {
  expenditures: false,
  summary: false,
};

const expenditureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENDITURES:
      return {
        expenditures: action.payload,
        summary: filterExpenditures(action.payload),
      };
    default:
      return state;
  }
};

export default expenditureReducer;
