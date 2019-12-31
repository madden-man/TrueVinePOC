import { takeEvery, select, put } from 'redux-saga/effects';
import socketIOClient from 'socket.io-client';

import actionTypes from './actionTypes';
import { selectedThreadSelector } from './selector';
import { messagesReceived } from './actions';

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

export function* fetchMessagesByThreadId(threadId) {
  yield put(yield messagesCallback(threadId))
}

function messagesCallback(threadId) {
  const socket = socketIOClient('http://localhost:8080');

  return new Promise((resolve, reject) => {
    socket.emit('thread_selected', threadId, (messages) => {
      resolve(messagesReceived(messages[0].threadId, messages));
    });
  });
}

export function* watchMessageSent() {
  yield takeEvery(actionTypes.MESSAGE_SENT, (action) => sendMessageToServer(action.payload.message));
};

export function* watchThreadSelected() {
  yield takeEvery(actionTypes.THREAD_SELECTED, (action) => fetchMessagesByThreadId(action.payload.threadId));
};

const sumSaga = [
  watchMessageSent,
  watchThreadSelected,
];

export default sumSaga;
