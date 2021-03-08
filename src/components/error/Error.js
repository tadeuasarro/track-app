import PropTypes from 'prop-types';
import './error.css';

const Error = ({ error }) => {
  if (error.length === 0) return '';
  return (
    <div className="error-container">
      {error.map(msg => <p key={msg}>{msg.charAt(0).toUpperCase() + msg.slice(1)}</p>)}
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
