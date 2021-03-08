/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import deleteExpenditures from '../../api/deleteExpenditures';
import indexExpenditures from '../../api/indexExpenditures';
import { useSelector, useDispatch } from 'react-redux';
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
  const { user } = useSelector(state => state).session;
  const dispatch = useDispatch();

  const {
    value,
    description,
    date,
    expense_id,
    id,
  } = expenditure;

  const handleClick = async id => {
    await deleteExpenditures(id);
    dispatch(indexExpenditures(user.id));
  }

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
      <i className="fas fa-trash-alt" onClick={() => handleClick(id)} />
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
    id: PropTypes.number.isRequired,
  }),
};

Expenditure.defaultProps = {
  expenditure: {},
};

export default Expenditure;
