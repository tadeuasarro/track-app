import PropTypes from 'prop-types';
import './error.css';

const Error = ({ error }) => {
  if (error.length === 0) return '';
  console.log(error);
  return (
    <div className="error-container">
      a
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.array,
}

Error.defaultProps = {
  error: [],
}

export default Error;
