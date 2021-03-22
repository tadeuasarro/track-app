import { useSelector, useDispatch } from 'react-redux';
import indexExpenditures from '../../api/indexExpenditures';
import { setCurrentUser } from '../../actions/session';
import { setExpenditures } from '../../actions/expenditure';
import Navbar from '../../components/navbar/Navbar';
import Routes from '../../Routes';
import Login from '../login/Login';
import './app.css';
import createSession from '../../api/createSession';

const App = () => {
  const { session, expenditure } = useSelector(state => state);
  const dispatch = useDispatch();
  const username = window.localStorage.getItem('track');

  const handleExpenditures = async () => {
    const res = await indexExpenditures(session.id);
    dispatch(setExpenditures(res));
  }

  const handleSession = async () => {
    const res = await createSession(username);
    console.log(res);
    if (!res.state.error) {
      dispatch(setCurrentUser(res.payload));
    }
  }

  if (!session.id && username) {
    handleSession();
  }

  if (session.id && !expenditure.expenditures) {
    handleExpenditures();
  }

  if (session.username === false) {
    return (
      <div className="app-container">
        <Navbar />
        <Login />
      </div>
    );
  }

  window.localStorage.setItem('track', session.username);

  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
