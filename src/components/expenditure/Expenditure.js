/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './expenditure.css';

const expenses = [
  'Total',
  'Education',
  'Grocery',
  'Health',
  'Leisure',
  'Living',
  'Transport',
];

const Expenditure = ({ expenditure }) => {
  const {
    value,
    description,
    date,
    expense_id,
  } = expenditure;
  return (
    <div className="expenditure-container">
      <p className="expenditure">
        Value:
        &nbsp;
        {value}
      </p>
      <p className="expenditure">
        Date:
        &nbsp;
        {date}
      </p>
      <p className="expenditure">
        Description:
        &nbsp;
        {description}
      </p>
      <p className="expenditure">
        Category:
        &nbsp;
        {expenses[expense_id]}
      </p>
    </div>
  );
};

Expenditure.propTypes = {
  expenditure: PropTypes.shape({
    expense_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

Expenditure.defaultProps = {
  expenditure: {},
};

export default Expenditure;
