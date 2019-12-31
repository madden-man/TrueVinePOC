import React, { useState } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { selectedThreadSelector, messagesSelector } from 'views/chat/state/selector';
import mapDispatchToProps from './mapDispatchToProps';

import './messagePane.css';

export const MessagePane = ({ thread, messages, messageSent }) => {
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
        <span>{messages[0].from === 'Self' ? messages[0].to : messages[0].from}</span>
      </div>
      <div className="messagepane__items">
        {messages.map(({ id, from, text }) =>
          <div className={classnames('messagepane__item', {
            'messagepane__item--self': from === 'Self',
            'messagepane__item--notself': from !== 'Self'
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
          messageSent(reply);
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
});

export default connect(selector, mapDispatchToProps)(MessagePane);
