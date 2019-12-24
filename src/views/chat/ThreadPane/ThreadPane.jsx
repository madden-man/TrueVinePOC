import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';

import socketIOClient from 'socket.io-client';

import { chatSelector } from 'views/chat/state/selector';
import mapDispatchToProps from './mapDispatchToProps';

import './threadPane.css';

export const ThreadPane = ({ threads, threadSelected, messageModalOpened, threadsReceived, messageReceived }) => {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:8080');

    socket.on('initial_data', ({ threads }) => threadsReceived(threads));
    socket.on('show_notification', ({ message, threads}) => {
      messageReceived(message);
      threadsReceived(threads);
    });
  }, []);
  
  return (
    <section className="threadpane">
      <button className="threadpane__btn" onClick={() => messageModalOpened()}>
        New Message
      </button>
      {threads.map(({ id, name, mostRecentMessage: { from, to, text }}) =>
        <div className="threadpane__thread" key={text} onClick={() => threadSelected(id)}>
          <span className="threadpane__name">
            {name} ({(from === 'Self' ? to : from)})
          </span>
          <span className="threadpane__msg">
            {text.trim().substring(0, 90)}{text.length > 90 && '...'}
          </span>
        </div>
      )}
    </section>
  );
};

ThreadPane.propTypes = {
  threads: array,
  threadSelected: func,
  messageModalOpened: func,
  threadsReceived: func,
  messageReceived: func,
};

ThreadPane.defaultProps = {
  threads: [],
};

export default connect(chatSelector, mapDispatchToProps)(ThreadPane);
