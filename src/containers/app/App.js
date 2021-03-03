/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Routes from '../../Routes';
import Login from '../login/Login';
import './app.css';

const App = () => {
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const username = document.cookie.split('=')[1];

  document.cookie = `username=${session.username}`;

  return <Login />

  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
