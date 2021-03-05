/* eslint-disable */
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import './progress.css';

const Progress = () => {
  const { expenditure } = useSelector(state => state);

  const { expenditures, summary } = expenditure.expenditures;

  return (
    <div>
      <div className="progress-container">
        <div className="progress-summary">
          <div className="progress-expent">
            <h3>Total expent </h3>
            <h3 className="total-amount">
              {(summary.total / 1000).toFixed(1)}
              &nbsp;
              k
            </h3>
          </div>
        </div>
        <div className="history-container">
          <i className="fas fa-history" />
          <p>History</p>
          <div>a</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
