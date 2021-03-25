import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/session';
import { setExpenditures } from '../../actions/expenditure';
import Navbar from '../../components/navbar/Navbar';
import Routes from '../../Routes';
import Login from '../login/Login';
import Loading from '../../components/loading/Loading';
import './app.css';
import createSession from '../../api/createSession';

const App = () => {
  const { session, fetch } = useSelector(state => state);
  const dispatch = useDispatch();
  const username = window.localStorage.getItem('track');

  const handleSession = async () => {
    const res = await createSession(username);
    if (!res.error) {
      dispatch(setCurrentUser(res.payload));
      dispatch(setExpenditures(res.payload.expenditures));
    }
  };

  if (!session.id && username) {
    handleSession();
    return <Loading />;
  }

  if (fetch.loading) {
    return <Loading />;
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
