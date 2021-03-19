import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import { eraseExpenditure } from '../../actions/expenditure';
import { setCurrentUser } from '../../actions/session';
import CreateTarget from '../createtarget/CreateTarget';
import './more.css';

const More = () => {
  const { session, expenditures } = useSelector(state => state);
  const dispatch = useDispatch(state => state);

  const handleClick = () => {
    document.cookie = 'username=';
    dispatch(setCurrentUser({ id: false, username: false, target: false }));
  };

  return (
    <div>
      <div className="more-container">
        <div className="user-info">
          <p>{session.username}</p>
        </div>
        <CreateTarget />
        <button className="logout-button" onClick={() => handleClick()} type="button">Logout</button>
      </div>
      <Footer />
    </div>
  );
};

export default More;
