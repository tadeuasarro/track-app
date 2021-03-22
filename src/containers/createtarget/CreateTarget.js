import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import updateUser from '../../api/updateUser';
import { updateUserTarget } from '../../actions/session';
import { setExpenditures } from '../../actions/expenditure';
import Error from '../../components/error/Error';
import './createtarget.css';

const CreateTarget = () => {
  const { target, id } = useSelector(state => state).session;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleClick = async () => {
    let newTarget = 0;

    if (!target) {
      newTarget = document.getElementById('target-input').value;
    }

    setState({
      ...state,
      pending: true,
    });

    const res = await updateUser({ target: newTarget }, id);

    setState(res.state);

    if (!res.state.error) {
      dispatch(updateUserTarget(res.payload.target));
      dispatch(setExpenditures(res.payload.expenditures));
    }
  };

  if (state.pending) {
    return (
      <div className="loading-container">
        <h1>Please wait...</h1>
      </div>
    );
  }

  const errorObj = (!state.error ? {} : state.error);

  if (target) {
    return (
      <button type="button" onClick={() => handleClick()} className="delete-target">Delete target</button>
    );
  }

  return (
    <div className="create-target-container">
      <input id="target-input" className="target-input" placeholder="Input target here" />
      <Error error={errorObj.target} />
      <button onClick={() => handleClick()} type="button" className="create-target">Set a new target</button>
    </div>
  );
};

export default CreateTarget;
