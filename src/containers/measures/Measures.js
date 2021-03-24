/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/Loading';
import Footer from '../../components/footer/Footer';
import Error from '../../components/error/Error';
import './measures.css';
import createExpenditure from '../../api/createExpenditure';
import { setExpenditures } from '../../actions/expenditure';

const Measures = () => {
  const { session } = useSelector(state => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleClick = async () => {
    const category = document.getElementById('form-category').value;
    const description = document.getElementById('form-description').value;
    const date = document.getElementById('form-date').value;
    const value = document.getElementById('form-value').value;

    setState({
      ...state,
      pending: true,
    });

    const res = await createExpenditure({
      category,
      description,
      date,
      value,
      user_id: session.id,
    });

    setState(res.state);

    if (!res.state.errors) {
      dispatch(setExpenditures(res.payload));
    }
  };

  const errorObj = (!state.error ? {} : state.error);

  if (!session.target) {
    return (
      <div>
        <div className="require-target">
          <h3>Create expense</h3>
          <p>Set up a target before submitting expenses entries.</p>
          <div className="target-instruction">
            <span>Click here! </span>
            <i className="fas fa-arrow-down" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (state.pending) {
    return (
      <div>
        <Loading />
        <Footer />
      </div>
    );
  }

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
          <Error error={errorObj.expense_id} />
          <input id="form-description" className="measures-form-input" placeholder="Description" />
          <Error error={errorObj.description} />
          <input id="form-date" className="measures-form-input" type="date" placeholder="Date yyyy/mm/dd" />
          <Error error={errorObj.date} />
          <input id="form-value" className="measures-form-input" placeholder="Value" />
          <Error error={errorObj.value} />
          <button onClick={() => handleClick()} className="measures-form-button" type="button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Measures;
