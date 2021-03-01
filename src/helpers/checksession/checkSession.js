import { useDispatch } from 'react-redux';
import { createSession } from '../../actions/index';

const checkSession = () => {
  const dispatch = useDispatch();

  document.cookie = 'username=tadeu';
  const username = document.cookie.split('=')[1];
  if (!username.length === 0) {
    dispatch(createSession(username));
    return true;
  }
  return false;
};

export default checkSession;
