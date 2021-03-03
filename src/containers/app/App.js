import { useSelector, useDispatch } from 'react-redux';
import { createSession } from '../../actions/session';
import Navbar from '../../components/navbar/Navbar';
import Routes from '../../Routes';
import Login from '../login/Login';
import './app.css';

const App = () => {
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const username = document.cookie.split('=')[1];

  if (username && session.username === false) {
    dispatch(createSession(username));
  }

  if (session.username === false) {
    return (
      <div className="app-container">
        <Navbar />
        <Login />
      </div>
    );
  }

  document.cookie = `username=${session.username}`;

  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
