/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { eraseSession } from '../../actions/session';
import { eraseExpenditure } from '../../actions/expenditure';
import Footer from '../../components/footer/Footer';
import CreateTarget from '../../components/createtarget/CreateTarget';
import './more.css';

const More = () => {
  const { session } = useSelector(state => state);
  const dispatch = useDispatch(state => state);

  const handleClick = () => {
    document.cookie = 'username=';
    dispatch(eraseSession());
    dispatch(eraseExpenditure());
  };

  return (
    <div>
      <div className="more-container">
        <div className="user-info">
          <p>{session.user.username}</p>
        </div>
        <CreateTarget target={session.user.target} />
        <button className="logout-button" onClick={() => handleClick()} type="button">Logout</button>
      </div>
      <Footer />
    </div>
  );
};

export default More;
