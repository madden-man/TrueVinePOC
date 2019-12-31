import React from 'react';
import { useState } from 'react';

export const Modal = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="message-modal__close" onClick={() => setOpen(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;