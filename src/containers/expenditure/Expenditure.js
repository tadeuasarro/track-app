/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import deleteExpenditures from '../../api/deleteExpenditures';
import './expenditure.css';
import { setErrors, setLoading } from '../../actions/fetch';
import updateExpenditures from '../../helpers/updateExpenditures';

const Expenditure = ({ expenditure }) => {
  const { session } = useSelector(state => state);
  const dispatch = useDispatch();
  const {
    value,
    description,
    date,
    category,
    id,
  } = expenditure;

  const handleClick = async id => {
    dispatch(setLoading());

    const res = await deleteExpenditures(id);

    dispatch(setErrors(res.error));

    if (!res.error) {
      updateExpenditures(session.id, dispatch);
    }
  };

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
        {category}
      </p>
      <button type="button" onClick={() => handleClick(id)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

Expenditure.propTypes = {
  expenditure: PropTypes.shape({
    category: PropTypes.string.isRequired,
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
