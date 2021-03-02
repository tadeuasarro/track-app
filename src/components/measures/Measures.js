import Footer from '../footer/Footer';
import './measures.css';

const Measures = () => (
  <div>
    <div className="measures-container">
      <h3>Create expense</h3>
      <form className="measures-form">
        <input className="measures-form-input" placeholder="Category" />
        <input className="measures-form-input" placeholder="Description" />
        <input className="measures-form-input" placeholder="Value" />
        <button className="measures-form-button" type="button">Submit</button>
      </form>
    </div>
    <Footer />
  </div>
);

export default Measures;
