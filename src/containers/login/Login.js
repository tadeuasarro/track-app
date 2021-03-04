import { useDispatch } from 'react-redux';
import createSession from '../../api/createSession';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const username = document.getElementById('login-input').value;
    dispatch(createSession(username));
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <input id="login-input" className="login-input" type="text" />
        <button onClick={() => handleClick()} className="login-button" type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
