import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setCurrentUser } from '../../actions/session';
import createUser from '../../api/createUser';
import createSession from '../../api/createSession';
import Error from '../../components/error/Error';
import './login.css';
import { setExpenditures } from '../../actions/expenditure';
import { setErrors, setLoading } from '../../actions/fetch';

const Login = () => {
  const { fetch } = useSelector(state => state);
  const dispatch = useDispatch();

  const [username, setUsername] = useState();

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleClick = async key => {
    dispatch(setLoading());

    let res = {};

    if (key) {
      const target = 0;
      res = await createUser({ username, target });
    } else {
      res = await createSession(username);
    }

    dispatch(setErrors(res.error));

    if (!res.error) {
      dispatch(setCurrentUser(res.payload));
      if (key) {
        dispatch(setExpenditures([]));
      } else {
        dispatch(setExpenditures(res.payload.expenditures));
      }
    }
  };

  const errorObj = (!fetch.errors ? {} : fetch.errors);

  return (
    <div className="login-container">
      <div className="instructions">
        <p className="welcome-text">Welcome to Personal Expenses, your personal expenses managing application.</p>
        <p className="welcome-text">Login with your account, or fill the form and click on register!</p>
      </div>
      <form className="login-form">
        <input onChange={handleChange} id="login-input" placeholder="Username" className="login-input" type="text" />
        <button onClick={() => handleClick(false)} className="login-button" type="button">Login</button>
        <Error error={errorObj.login} />
        <button onClick={() => handleClick(true)} className="register-button" type="button">Register</button>
        <Error error={errorObj.username} />
      </form>
    </div>
  );
};

export default Login;
