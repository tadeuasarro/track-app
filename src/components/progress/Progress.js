import Footer from '../footer/Footer';
import './progress.css';

const Progress = () => (
  <div>
    <div className="progress-container">
      <div className="reset-button-container">
        <button className="reset-button" type="button">Start period</button>
      </div>
      <div className="progress-summary">
        <div className="progress-saved">
          <h3>Total saved </h3>
          <h3 className="total-amount">5 k</h3>
        </div>
        <div className="progress-expent">
          <h3>Total expent </h3>
          <h3 className="total-amount">5 k</h3>
        </div>
      </div>
      <div className="history-container">
        <i className="fas fa-history" />
        <p>History</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Progress;
