import {
  indexExpendituresPending, indexExpendituresSuccess, indexExpendituresError,
} from '../actions/expenditure';

const url = 'http://localhost:5000/expenditures?user_id=1';
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
        console.log(res);
        dispatch(indexExpendituresSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(indexExpendituresError(error));
      });
  };
}

export default indexExpenditures;
