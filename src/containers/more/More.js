import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import CreateTarget from '../createtarget/CreateTarget';
import './more.css';

const More = () => {
  const { session } = useSelector(state => state);
  const dispatch = useDispatch(state => state);

  const handleClick = () => {
    document.cookie = 'username=';
  };

  return (
    <div>
      <div className="more-container">
        <div className="user-info">
          <p>{session.user.username}</p>
        </div>
        <CreateTarget />
        <button className="logout-button" onClick={() => handleClick()} type="button">Logout</button>
      </div>
      <Footer />
    </div>
  );
};

export default More;
