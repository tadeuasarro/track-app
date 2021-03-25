import indexExpenditures from '../api/indexExpenditures';
import { setExpenditures } from '../actions/expenditure';
import { setErrors, setLoading } from '../actions/fetch';

const updateExpenditures = async (id, dispatch) => {
  dispatch(setLoading());
  const res = await indexExpenditures(id);
  dispatch(setErrors(res.error));
  dispatch(setExpenditures(res.payload));
};

export default updateExpenditures;
