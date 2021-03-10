import { useSelector } from 'react-redux';
import Expenditure from '../expenditure/Expenditure';
import Loading from '../../components/loading/Loading';
import Footer from '../../components/footer/Footer';
import './progress.css';

const Progress = () => {
  const { expenditure } = useSelector(state => state);

  const { expenditures, summary } = expenditure.expenditures;

  if (!expenditure.expenditures) return <Loading />;

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
          <h3>History</h3>
          { expenditures.map(expenditure => (
            <Expenditure key={expenditure.id} expenditure={expenditure} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
