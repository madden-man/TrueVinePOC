import React, { useState } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import socketIOClient from 'socket.io-client';

import { userInfoSelector } from 'views/auth/state/selector';
import { selectedThreadSelector, messagesSelector } from 'views/chat/state/selector';

import './messagePane.css';

export const MessagePane = ({ thread, messages, username }) => {
  const [reply, setReply] = useState('');

  if (!thread) return null;
  
  if (!messages || messages.length === 0) {
    return (
      <section className="messagepane">
        <h1>Looks like you aren't in any threads yet!</h1>
      </section>
    )
  }

  return (
    <section className="messagepane">
      <div className="messagepane__info">
        <h2>{thread.name}</h2>
        <span>{messages[0].from === username ? messages[0].to : messages[0].from}</span>
      </div>
      <div className="messagepane__items">
        {messages.map(({ id, from, text }) =>
          <div className={classnames('messagepane__item', {
            'messagepane__item--self': from === username,
            'messagepane__item--notself': from !== username,
            })}
            key={id || text}
          >
            {text && text.split(/\n/g).map(line =>
              <p className="messagepane__text" key={line}>
                {line}
              </p>)}
        </div>)}
      </div>
      <div className="messagepane__input">
        <input value={reply} onChange={(e) => setReply(e.target.value)} />
        <button onClick={() => {
          const socket = socketIOClient('http://localhost:8080');

          const messageInfo = {
            text: reply,
            threadId: thread.id,
            from: username,
            to: thread.name,
          };

          socket.emit('new_notification', messageInfo);

          setReply('');
        }}>Send Message</button>
      </div>
    </section>
  );
};

MessagePane.propTypes = {
  messages: array,
};

const selector = state => ({
  ...selectedThreadSelector(state),
  ...messagesSelector(state),
  ...userInfoSelector(state),
});

export default connect(selector)(MessagePane);
