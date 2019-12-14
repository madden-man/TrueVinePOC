import actionTypes from './actionTypes';

const initialState = {
  selectedThreadId: '',
  threads: [{
    id: '1',
    mostRecentMessage: {
      from: 'Self',
      to: 'Tommy Madden',
      text: 'Hey everyone! I just wanted to let you know that Eric and I will be hosting a New Years\' Eve party next Thursday night, and of course, you\'re all welcome to join us :) Let me know if you can make it!',
    },
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.THREAD_SELECTED:
      return {
        ...state,
        selectedThreadId: action.payload.threadId,
      };
    default:
      return state;
  }
}
