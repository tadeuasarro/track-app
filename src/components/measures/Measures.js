import { useState } from 'react';
import Loading from '../loading/Loading';
import Footer from '../footer/Footer';
import './measures.css';
import createExpenditure from '../../api/createExpenditure';

const Measures = () => {
  const [state, setState] = useState({
    pending: false,
    error: false,
  });

  const handleClick = () => {
    const { expense } = document.getElementById('form-category');
    const { description } = document.getElementById('form-description');
    const { date } = document.getElementById('form-date');
    const { value } = document.getElementById('form-value');

    setState({
      ...state,
      pending: true,
    });

    createExpenditure({
      expense,
      description,
      date,
      value,
    });
  };

  if (state.pending) return <Loading />;

  return (
    <div>
      <div className="measures-container">
        <h3>Create expense</h3>
        <form className="measures-form">
          <input id="form-category" className="measures-form-input" placeholder="Category" />
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
