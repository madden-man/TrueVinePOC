import actionTypes from './actionTypes';

import './sagas';

const initialState = {
  isModalOpen: false,
  selectedThreadId: '1',
  threads: [{
    id: '1',
    name: 'Master of Code',
    mostRecentMessage: {
      id: '3',
      threadId: '1',
      from: 'Self',
      to: 'Tommy Madden',
      text: 'Hey everyone! I just wanted to let you know that Eric and I will be hosting a New Years\' Eve party next Thursday night, and of course, you\'re all welcome to join us :) Let me know if you can make it!',
    },
  }, {
    id: '2',
    mostRecentMessage: {
      id: '20',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    },
  }, {
    id: '3',
    name: 'Office Defeaters',
    mostRecentMessage: {
      id: '1',
      threadId: '3',
      from: 'Self',
      to: 'My Friend',
      text: 'You are literally the best friend I\'ve ever seen, like the coolest man I\'d ever met!',
    },
  }],
  messages: {
    ['1']: [{
      id: '1',
      threadId: '1',
      from: 'Self',
      to: 'Tommy Madden',
      text: 'You are cool.'
    }, {
      id: '2',
      threadId: '1',
      from: 'Tommy Madden',
      to: 'Self',
      text: 'You are awesome!',
    }, {
      id: '3',
      threadId: '1',
      from: 'Self',
      to: 'Tommy Madden',
      text: 'Hey everyone! I just wanted to let you know that Eric and I will be hosting a New Years\' Eve party next Thursday night, and of course, you\'re all welcome to join us :)\nLet me know if you can make it!',
    }],
    ['2']: [{
      id: '1',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '2',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '3',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '4',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '5',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '6',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '7',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '8',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '9',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '10',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '11',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '12',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '13',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '14',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '15',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '16',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '17',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '18',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      id: '19',
      threadId: '2',
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      id: '20',
      threadId: '2',
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }],
    ['3']: [{
      id: '1',
      threadId: '3',
      from: 'Self',
      to: 'My Friend',
      text: 'You are literally the best friend I\'ve ever seen, like the coolest man I\'d ever met!',
    }],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.THREAD_SELECTED:
      return {
        ...state,
        selectedThreadId: action.payload.threadId,
      };
    case actionTypes.MESSAGE_MODAL_OPENED:
      return {
        ...state,
        isModalOpen: true,
      };
    case actionTypes.MESSAGE_MODAL_CLOSED:
    case actionTypes.MESSAGE_SENT:
      return {
        ...state,
        isModalOpen: false,
      };
    case actionTypes.MESSAGE_RECEIVED:
      const threadId = action.payload.message.threadId;

      const messageThread = [
        ...state.messages[threadId],
        action.payload.message,
      ];

      return {
        ...state,
        messages: {
          ...state.messages,
          [threadId]: messageThread,
        },
      };
    case actionTypes.THREADS_RECEIVED:
      return {
        ...state,
        threads: action.payload.threads,
      }
    default:
      return state;
  }
}

/*
might need this as schema somehow? lol

  */
