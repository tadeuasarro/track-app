import { useSelector, useDispatch } from 'react-redux';
import createSession from '../../api/createSession';
import indexExpenditures from '../../api/indexExpenditures';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import Routes from '../../Routes';
import Login from '../login/Login';
import './app.css';

const App = () => {
  const { session, expenditure } = useSelector(state => state);
  const dispatch = useDispatch();
  const username = document.cookie.split('=')[1];

  if (session.user && !expenditure.pending && !expenditure.expenditures) {
    dispatch(indexExpenditures(session.user.id));
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
