import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import updateUser from '../../api/updateUser';
import { updateUserTarget } from '../../actions/session';
import { setExpenditures } from '../../actions/expenditure';
import Error from '../../components/error/Error';
import './createtarget.css';
import { setLoading, setErrors } from '../../actions/fetch';

const CreateTarget = () => {
  const { session, fetch } = useSelector(state => state);
  const { target, id } = session;
  const dispatch = useDispatch();

  const [newTarget, setNewTarget] = useState(0);

  const handleChange = e => {
    setNewTarget(e.target.value);
  };

  const handleClick = async key => {
    dispatch(setLoading());

    let res = {};

    if (!key) {
      res = await updateUser({ target: 0 }, id);
    } else {
      res = await updateUser({ target: newTarget }, id);
    }

    dispatch(setErrors(res.error));

    if (!res.error) {
      dispatch(updateUserTarget(res.payload.target));
      dispatch(setExpenditures(res.payload.expenditures));
    }
  };

  if (fetch.loading) {
    return (
      <div className="loading-container">
        <h1>Please wait...</h1>
      </div>
    );
  }

  const errorObj = (!fetch.errors ? {} : fetch.errors);

  if (target) {
    return (
      <button type="button" onClick={() => handleClick(false)} className="delete-target">Delete target</button>
    );
  }

  return (
    <div className="create-target-container">
      <input onChange={handleChange} id="target-input" className="target-input" placeholder="Input target here" />
      <Error error={errorObj.target} />
      <button onClick={() => handleClick(true)} type="button" className="create-target">Set a new target</button>
    </div>
  );
};

export default CreateTarget;
