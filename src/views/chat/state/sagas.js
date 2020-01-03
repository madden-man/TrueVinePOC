import { takeEvery, put } from 'redux-saga/effects';
import socketIOClient from 'socket.io-client';

import actionTypes from './actionTypes';
import { messagesReceived } from './actions';

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

export function* watchThreadSelected() {
  yield takeEvery(actionTypes.THREAD_SELECTED, (action) => fetchMessagesByThreadId(action.payload.threadId));
};

const sumSaga = [
  watchThreadSelected,
];

export default sumSaga;
