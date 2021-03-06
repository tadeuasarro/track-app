import { useDispatch } from 'react-redux';
import { useState } from 'react';
import createSession from '../../api/createSession';
import createUser from '../../api/createUser';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleLoginClick = () => {
    const username = document.getElementById('login-input').value;
    dispatch(createSession(username));
  };

  const handleRegisterClick = async () => {
    const username = document.getElementById('login-input').value;
    const target = 0;

    setState({
      ...state,
      pending: true,
    });

    const res = await createUser({ username, target });

    setState(res.state);

    if (!res.error) {
      dispatch(createSession(username));
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <input id="login-input" className="login-input" type="text" />
        <button onClick={() => handleLoginClick()} className="login-button" type="button">Login</button>
        <button onClick={() => handleRegisterClick()} className="register-button" type="button">Register</button>
      </form>
    </div>
  );
};

export default Login;
