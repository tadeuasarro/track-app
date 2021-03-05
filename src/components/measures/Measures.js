/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../loading/Loading';
import Footer from '../footer/Footer';
import './measures.css';
import createExpenditure from '../../api/createExpenditure';
import indexExpenditures from '../../api/indexExpenditures';

const Measures = () => {
  const { session } = useSelector(state => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleClick = async () => {
    const expense_id = document.getElementById('form-category').value;
    const description = document.getElementById('form-description').value;
    const date = document.getElementById('form-date').value;
    const value = document.getElementById('form-value').value;

    setState({
      ...state,
      pending: true,
    });

    const res = await createExpenditure({
      expense_id,
      description,
      date,
      value,
      user_id: session.user.id,
    });

    setState(res);

    dispatch(indexExpenditures(session.user.id));
  };

  if (state.pending) return <Loading />;

  return (
    <div>
      <div className="measures-container">
        <h3>Create expense</h3>
        <form className="measures-form">
          <select id="form-category" className="measures-form-input">
            <option value="">Category</option>
            <option value="1">Education</option>
            <option value="2">Grocery</option>
            <option value="3">Health</option>
            <option value="4">Leisure</option>
            <option value="5">Living</option>
            <option value="6">Transport</option>
          </select>
          <input id="form-description" className="measures-form-input" placeholder="Description" />
          <input id="form-date" className="measures-form-input" placeholder="Date yyyy/mm/dd" />
          <input id="form-value" className="measures-form-input" placeholder="Value" />
          <button onClick={() => handleClick()} className="measures-form-button" type="button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Measures;
