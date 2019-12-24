import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import { messageModalSelector } from '../state/selector';
import mapDispatchToProps from './mapDispatchToProps';

import './messageModal.css';

export const MessageModal = ({ isModalOpen, messageModalClosed, messageSent }) => {
  const [message, setMessage] = useState('This is my example message! Hi!');

  if (!isModalOpen) return null;

  return (
    <div className="message-modal-container">
      <section className="message-modal">
        <button className="message-modal__close" onClick={messageModalClosed}>
          X
        </button>
        <h1>New Message</h1>

        <textarea
          style={{ width: '100%', height: '4rem' }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <br />
        <button onClick={() => messageSent(message)}>
          Send Message
        </button>
      </section>
    </div>
  );
};

MessageModal.propTypes = {
  isModalOpen: bool,
  messageModalClosed: func,
  messageSent: func,
};

export default connect(messageModalSelector, mapDispatchToProps)(MessageModal);
