/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Error from '../../components/error/Error';
import './measures.css';
import createExpenditure from '../../api/createExpenditure';
import updateExpenditures from '../../helpers/updateExpenditures';
import { setErrors, setLoading } from '../../actions/fetch';

const Measures = () => {
  const { session, fetch } = useSelector(state => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = async () => {
    dispatch(setLoading());

    const {
      category,
      description,
      date,
      value,
    } = state;

    const res = await createExpenditure({
      category,
      description,
      date,
      value,
      user_id: session.id,
    });

    dispatch(setErrors(res.error));

    if (!res.error) {
      updateExpenditures(session.id, dispatch);
    }
  };

  const errorObj = (!fetch.errors ? {} : fetch.errors);

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

  return (
    <div>
      <div className="measures-container">
        <h3>Create expense</h3>
        <form className="measures-form">
          <select onChange={handleChange} name="category" className="measures-form-input">
            <option value="">Category</option>
            <option value="1">Education</option>
            <option value="2">Grocery</option>
            <option value="3">Health</option>
            <option value="4">Leisure</option>
            <option value="5">Living</option>
            <option value="6">Transport</option>
          </select>
          <Error error={errorObj.category} />
          <input onChange={handleChange} name="description" className="measures-form-input" placeholder="Description" />
          <Error error={errorObj.description} />
          <input onChange={handleChange} name="date" className="measures-form-input" type="date" placeholder="Date yyyy/mm/dd" />
          <Error error={errorObj.date} />
          <input onChange={handleChange} name="value" className="measures-form-input" placeholder="Value" />
          <Error error={errorObj.value} />
          <button onClick={() => handleClick()} className="measures-form-button" type="button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Measures;
