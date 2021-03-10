/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/Loading';
import deleteExpenditures from '../../api/deleteExpenditures';
import indexExpenditures from '../../api/indexExpenditures';
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
  const [state, setState] = useState({
    pending: false,
    error: false,
  })
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

    setState({
      ...state,
      pending: true,
    })

    const res = await deleteExpenditures(id);

    setState(res);

    if (!res.error) {
      dispatch(indexExpenditures(user.id));
    }

  };

  if (state.pending) return <Loading />

  return (
    <div className="expenditure-container">
      <p className="expenditure">
        <span>Value:</span>
        &nbsp;
        {value}
      </p>
      <p className="expenditure">
        <span>Date:</span>
        &nbsp;
        {date}
      </p>
      <p className="expenditure">
        <span>Description:</span>
        &nbsp;
        {description}
      </p>
      <p className="expenditure">
        <span>Category:</span>
        &nbsp;
        {expenses[expense_id]}
      </p>
      <button type="button" onClick={() => handleClick(id)}>
        <i className="fas fa-trash-alt" />
      </button>
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