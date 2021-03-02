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
          <div className="home-catalogue-item">Education</div>
          <div className="home-catalogue-item">Grocery</div>
          <div className="home-catalogue-item">Health</div>
          <div className="home-catalogue-item">Leisure</div>
          <div className="home-catalogue-item">Living</div>
          <div className="home-catalogue-item">Transportation</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
