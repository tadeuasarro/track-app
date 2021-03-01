import { useDispatch } from 'react-redux';
import { eraseSession } from '../../actions/index';

const Home = () => {
  const dispatch = useDispatch(state => state);

  const handleClick = () => {
    document.cookie = 'username=';
    dispatch(eraseSession());
  };

  return (
    <div>
      <button onClick={() => handleClick()} type="button">Logout</button>
    </div>
  );
};

export default Home;
