import PropTypes from 'prop-types';
import './createtarget.css';

const CreateTarget = ({ target }) => {
  const handleCreateClick = () => {
    console.log('Create a target');
  };

  const handleDeleteClick = () => {
    console.log('Deleting a target');
  };

  if (target) {
    return (
      <button type="button" onClick={handleDeleteClick()} className="delete-target">Delete target</button>
    );
  }

  return (
    <div>
      <input className="target-input" placeholder="Input target here" />
      <button onClick={handleCreateClick()} type="button" className="create-target">Set a new target</button>
    </div>
  );
};

CreateTarget.propTypes = {
  target: PropTypes.number.isRequired,
};

export default CreateTarget;
