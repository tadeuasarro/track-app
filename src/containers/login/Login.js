import { useDispatch } from 'react-redux';
import createSession from '../../api/createSession';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    const username = document.getElementById('login-input').value;
    dispatch(createSession(username));
  };

  const handleRegisterClick = () => {
    console.log('heelo');
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
