import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setCurrentUser } from '../../actions/session';
import createUser from '../../api/createUser';
import createSession from '../../api/createSession';
import Error from '../../components/error/Error';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleClick = async key => {
    const username = document.getElementById('login-input').value;

    setState({
      ...state,
      pending: true,
    });

    let res = {};

    if (key) {
      const target = 0;
      res = await createUser({ username, target });
    } else {
      res = await createSession(username);
    }

    setState(res.state);

    if (!res.state.error) {
      dispatch(setCurrentUser(res.payload));
    }

  };

  const errorObj = (!state.error ? {} : state.error);

  return (
    <div className="login-container">
      <div className="instructions">
        <p>Welcome to Personal Expenses, your personal expenses managing application.</p>
        <p>Login with your account, or fill the form and click on register!</p>
      </div>
      <form className="login-form">
        <input id="login-input" placeholder="Username" className="login-input" type="text" />
        <button onClick={() => handleClick(false)} className="login-button" type="button">Login</button>
        <Error error={errorObj.login} />
        <button onClick={() => handleClick(true)} className="register-button" type="button">Register</button>
        <Error error={errorObj.username} />
      </form>
    </div>
  );
};

export default Login;
