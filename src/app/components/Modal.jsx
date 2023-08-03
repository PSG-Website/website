import React from 'react';
import Modal from 'react-modal';


//initial styling for modal window

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '100%',
    borderRadius: '4px',
    backgroundColor:'#2B4BAB',
    height: '500px'
  },
};

const AppModal = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      {children}
    </Modal>
  );
};

export default AppModal;