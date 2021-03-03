/* eslint-disable */
import {
  indexExpendituresPending, indexExpendituresSuccess, indexExpendituresError,
} from '../actions/expenditure';

const data = {
  expense: {
    name: 'Living',
  }
}

const url = 'http://localhost:5000/expenses';
const config = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

function indexExpenditures() {
  return dispatch => {
    dispatch(indexExpendituresPending());
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(indexExpendituresSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(indexExpendituresError(error));
      });
  };
}

export default indexExpenditures;
