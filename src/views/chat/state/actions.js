import actionTypes from './actionTypes';

export const threadSelected = (threadId) => ({
  type: actionTypes.THREAD_SELECTED,
  payload: {
    threadId,
  },
});

export default {
  threadSelected,
};
