import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h3 className="text-2xl font-bold text-[#00A6A6] mb-4">Thank You!</h3>
        <p className="text-lg text-gray-600">
          Your information has been received. We are thrilled to have you join our community and
          will be in touch with you soon!
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;
