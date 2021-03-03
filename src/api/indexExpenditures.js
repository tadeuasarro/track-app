/* eslint-disable */
import {
  indexExpendituresPending, indexExpendituresSuccess, indexExpendituresError,
} from '../actions/expenditure';

const url = 'http://localhost:5000/expenditures';
const config = {
  mode: 'cors',
  method: 'GET',
};

const indexExpenditures = async () => {
  const res = await fetch(url, config);
  console.log(res);
}

export default indexExpenditures;

/*

function indexExpenditures() {
  console.log('yey');
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

*/
