import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import socketIOClient from 'socket.io-client';

import { userInfoSelector } from 'views/auth/state/selector';
import { messageModalSelector } from '../state/selector';
import mapDispatchToProps from './mapDispatchToProps';

import './messageModal.css';

export const MessageModal = ({ username, isModalOpen, messageModalClosed }) => {
  const [fields, setFields] = useState({
    name: '',
    recipient: '',
    message: '',
  });

  if (!isModalOpen) return null;

  return (
    <div className="message-modal-container">
      <section className="message-modal">
        <button className="message-modal__close" onClick={messageModalClosed}>
          X
        </button>
        <h1>New Message</h1>

        <h3>Thread Name</h3>
        <input value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
        <h3>Recipient</h3>
        <input value={fields.recipient} onChange={(e) => setFields({ ...fields, recipient: e.target.value })} />

        <h3>Message</h3>
        <textarea
          style={{ width: '100%', height: '4rem' }}
          placeholder="Hey everybody!"
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />
        <br />
        <br />
        <button onClick={() => {
          const socket = socketIOClient('http://localhost:8080');
        
          const messageInfo = {
            text: fields.message,
            from: username,
            to: fields.recipient,
          };

          const threadInfo = {
            name: fields.name,
            mostRecentMessage: messageInfo,
          };
        
          socket.emit('new_thread', threadInfo);
        }}>
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

const combinedSelector = state => ({
  ...messageModalSelector(state),
  ...userInfoSelector(state),
});

export default connect(combinedSelector, mapDispatchToProps)(MessageModal);
