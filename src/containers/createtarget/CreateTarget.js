import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import createSession from '../../api/createSession';
import updateUser from '../../api/updateUser';
import './createtarget.css';

const CreateTarget = () => {
  const { target, id, username } = useSelector(state => state).session.user;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleClick = async () => {
    let newTarget = null;

    if (!target) {
      newTarget = document.getElementById('target-input').value;
    }

    setState({
      ...state,
      pending: true,
    });

    const res = await updateUser({ target: newTarget }, id);

    setState(res);

    dispatch(createSession(username));
  };

  if (target) {
    return (
      <button type="button" onClick={() => handleClick()} className="delete-target">Delete target</button>
    );
  }

  return (
    <div>
      <input id="target-input" className="target-input" placeholder="Input target here" />
      <button onClick={() => handleClick()} type="button" className="create-target">Set a new target</button>
    </div>
  );
};

export default CreateTarget;
