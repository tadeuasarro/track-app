import { useSelector } from 'react-redux';
import Login from '../../containers/login/Login';

const Home = () => {
  const { session } = useSelector(state => state);

  if (!session.username) return <Login />;

  return (
    <div>This is working</div>
  );
};

export default Home;
