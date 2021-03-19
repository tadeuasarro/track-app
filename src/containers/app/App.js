import { useSelector, useDispatch } from 'react-redux';
import indexExpenditures from '../../api/indexExpenditures';
import { setExpenditures } from '../../actions/expenditure';
import filterExpenditures from '../../helpers/filterExpenditures';
import Navbar from '../../components/navbar/Navbar';
import Routes from '../../Routes';
import Login from '../login/Login';
import './app.css';

const App = () => {
  const { session, expenditure } = useSelector(state => state);
  const dispatch = useDispatch();
  const username = document.cookie.split('=')[1];

  console.log(expenditure);

  const handleLoad = async () => {
    const res = await indexExpenditures(session.id);
    const summary = filterExpenditures(res);
    dispatch(setExpenditures({ res, summary }));
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
