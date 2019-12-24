import { takeEvery, select } from 'redux-saga/effects';
import socketIOClient from 'socket.io-client';

import actionTypes from './actionTypes';
import { selectedThreadSelector } from './selector';

export function* sendMessageToServer(message) {
  const socket = socketIOClient('http://localhost:8080');

  const { thread } = yield select(selectedThreadSelector);

  const messageInfo = {
    text: message,
    threadId: thread.id,
    from: 'Self',
    to: thread.name,
  };

  socket.emit('new_notification', messageInfo);
};

export function* watchMessageSent() {
  yield takeEvery(actionTypes.MESSAGE_SENT, (action) => sendMessageToServer(action.payload.message))
};

const sumSaga = [
  watchMessageSent,
];

export default sumSaga;
