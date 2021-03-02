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
      <div className="home-catalogue">
        this is some content
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
