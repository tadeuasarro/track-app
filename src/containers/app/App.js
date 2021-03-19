import { useSelector, useDispatch } from 'react-redux';
import indexExpenditures from '../../api/indexExpenditures';
import { setExpenditures } from '../../actions/expenditure';
import Navbar from '../../components/navbar/Navbar';
import Routes from '../../Routes';
import Login from '../login/Login';
import './app.css';

const App = () => {
  const { session, expenditure } = useSelector(state => state);
  const dispatch = useDispatch();
  const username = document.cookie.split('=')[1];

  const handleLoad = async () => {
    const res = await indexExpenditures(session.id);
    dispatch(setExpenditures(res));
  }

  if (session.id && !expenditure.expenditures) {
    handleLoad();
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
