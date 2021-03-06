import React from 'react';
import Button from './Button';

const ErrorModal = ({ closeModal, show }) => {
  return (
    show && (
      <div className="error-modal">
        <div className="backdrop" onClick={closeModal} />
        <div className="error-modal__container card">
          <p>Oops, something went wrong ):</p>
          <Button onClick={closeModal}>OK</Button>
        </div>
      </div>
    )
  );
}

export default ErrorModal;