import Footer from '../footer/Footer';
import './home.css';

const Home = () => (
  <div>
    <div className="home-container">
      <div className="home-summary">
        <div className="home-summary-container">
          <div className="home-summary-info">1.0 K</div>
          <p>Expent</p>
        </div>
        <div className="home-summary-container">
          <div className="home-summary-info">2.0 K</div>
          <p>Target</p>
        </div>
        <div className="home-summary-container">
          <div className="home-summary-info">1.0 K</div>
          <p>Balance</p>
        </div>
      </div>
      <div className="home-catalogue-container">
        <div className="home-catalogue">
          <div className="home-catalogue-item">
            <i className="fas fa-graduation-cap" />
            <div>
              <p>0.3 k</p>
              <span>Education</span>
            </div>
          </div>
          <div className="home-catalogue-item">
            <i className="fas fa-shopping-cart" />
            <div>
              <p>0.3 k</p>
              <span>Grocery</span>
            </div>
          </div>
          <div className="home-catalogue-item">
            <i className="fas fa-heartbeat" />
            <div>
              <p>0.3 k</p>
              <p>Health</p>
            </div>
          </div>
          <div className="home-catalogue-item">
            <i className="fas fa-gamepad" />
            <div>
              <p>0.3 k</p>
              <span>Leisure</span>
            </div>
          </div>
          <div className="home-catalogue-item">
            <i className="fas fa-home" />
            <div>
              <p>0.3 k</p>
              <span>Living</span>
            </div>
          </div>
          <div className="home-catalogue-item">
            <i className="fas fa-bus" />
            <div>
              <p>0.3 k</p>
              <span>Transport</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
