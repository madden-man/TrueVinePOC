import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { selectedThreadSelector, messagesSelector } from 'views/chat/state/selector';

import './messageList.css';

export const MessageList = ({ thread, messages }) =>
  <section className="messagelist">
    <div className="messagelist__info">
      <h2>{thread.name}</h2>
      <span>{messages[0].from === 'Self' ? messages[0].to : messages[0].from}</span>
    </div>
    <div className="messagelist__items">
      {messages.map(({ id, from, text }) =>
        <div className={classnames('messagelist__item', { 
          'messagelist__item--self': from === 'Self',
          'messagelist__item--notself': from !== 'Self'
          })}
          key={id}
        >
          {text.split(/\n/g).map(line =>
            <p className="messagelist__text" key={line}>
              {line}
            </p>)}
      </div>)}
    </div>
  </section>;

MessageList.propTypes = {
  messages: array,
};

const selector = state => ({
  ...selectedThreadSelector(state),
  ...messagesSelector(state),
});

export default connect(selector)(MessageList);
