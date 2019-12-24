import actionTypes from './actionTypes';

export const threadSelected = (threadId) => ({
  type: actionTypes.THREAD_SELECTED,
  payload: {
    threadId,
  },
});

export const messageModalOpened = () => ({
  type: actionTypes.MESSAGE_MODAL_OPENED,
});

export const messageModalClosed = () => ({
  type: actionTypes.MESSAGE_MODAL_CLOSED,
});

export const messageSent = (message) => ({
  type: actionTypes.MESSAGE_SENT,
  payload: {
    message,
  },
});

export const messageReceived = (message) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  payload: {
    message,
  },
});

export const threadsReceived = (threads) => ({
  type: actionTypes.THREADS_RECEIVED,
  payload: {
    threads,
  },
});

export default {
  threadSelected,
  messageModalOpened,
  messageModalClosed,
  messageSent,
  messageReceived,
  threadsReceived,
};
