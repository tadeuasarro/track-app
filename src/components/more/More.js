import { useDispatch } from 'react-redux';
import { eraseSession } from '../../actions/index';
import Footer from '../footer/Footer';

const More = () => {
  const dispatch = useDispatch(state => state);

  const handleClick = () => {
    document.cookie = 'username=';
    dispatch(eraseSession());
  };

  return (
    <div>
      <button onClick={() => handleClick()} type="button">Logout</button>
      <Footer />
    </div>
  );
};

export default More;
