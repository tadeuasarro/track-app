import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';
import './home.css';

const Home = () => {
  const { session, expenditure } = useSelector(state => state);

  const { target } = session;

  if (!expenditure.expenditures) return <Loading />;

  const {
    total,
    education,
    grocery,
    health,
    leisure,
    living,
    transport,
  } = expenditure.summary;

  return (
    <div>
      <div className="home-container">
        <div className="home-summary">
          <div className="home-summary-container">
            <div className="home-summary-info">
              {(total / 1000).toFixed(1)}
              &nbsp;
              k
            </div>
            <p>Expent</p>
          </div>
          <div className="home-summary-container">
            <div className="home-summary-info">
              {(target / 1000).toFixed(1)}
              &nbsp;
              k
            </div>
            <p>Target</p>
          </div>
          <div className="home-summary-container">
            <div className="home-summary-info">
              {((target - total) / 1000).toFixed(1)}
              &nbsp;
              k
            </div>
            <p>Balance</p>
          </div>
        </div>
        <div className="home-catalogue-container">
          <div className="home-catalogue">
            <div className="home-catalogue-item">
              <i className="fas fa-graduation-cap" />
              <div>
                <p>
                  {(education / 1000).toFixed(1)}
                  &nbsp;
                  k
                </p>
                <span>Education</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-shopping-cart" />
              <div>
                <p>
                  {(grocery / 1000).toFixed(1)}
                  &nbsp;
                  k
                </p>
                <span>Grocery</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-heartbeat" />
              <div>
                <p>
                  {(health / 1000).toFixed(1)}
                  &nbsp;
                  k
                </p>
                <p>Health</p>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-gamepad" />
              <div>
                <p>
                  {(leisure / 1000).toFixed(1)}
                  &nbsp;
                  k
                </p>
                <span>Leisure</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-home" />
              <div>
                <p>
                  {(living / 1000).toFixed(1)}
                  &nbsp;
                  k
                </p>
                <span>Living</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-bus" />
              <div>
                <p>
                  {(transport / 1000).toFixed(1)}
                  &nbsp;
                  k
                </p>
                <span>Transport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
