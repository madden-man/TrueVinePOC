import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';

import { chatSelector } from 'views/chat/state/selector';
import mapDispatchToProps from './mapDispatchToProps';

import './chatList.css';

export const ChatList = ({ threads, threadSelected }) =>
  <section className="chatlist">
    <button className="chatlist__btn">
      New Message
    </button>
    {threads.map(({ id, name, mostRecentMessage: { from, to, text }}) =>
      <div className="chatlist__thread" key={text} onClick={() => threadSelected(id)}>
        <span className="chatlist__name">
          {name} ({(from === 'Self' ? to : from)})
        </span>
        <span className="chatlist__msg">
          {text.trim().substring(0, 90)}{text.length > 90 && '...'}
        </span>
      </div>
    )}
  </section>;

ChatList.propTypes = {
  threads: array,
  threadSelected: func,
};

ChatList.defaultProps = {
  threads: [],
};

export default connect(chatSelector, mapDispatchToProps)(ChatList);
