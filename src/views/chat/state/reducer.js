import actionTypes from './actionTypes';

const initialState = {
  selectedThreadId: '1',
  threads: [{
    id: '1',
    name: 'Master of Code',
    mostRecentMessage: {
      from: 'Self',
      to: 'Tommy Madden',
      text: 'Hey everyone! I just wanted to let you know that Eric and I will be hosting a New Years\' Eve party next Thursday night, and of course, you\'re all welcome to join us :) Let me know if you can make it!',
    },
  }, {
    id: '2',
    mostRecentMessage: {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    },
  }, {
    id: '3',
    name: 'Office Defeaters',
    mostRecentMessage: {
      from: 'Self',
      to: 'My Friend',
      text: 'You are literally the best friend I\'ve ever seen, like the coolest man I\'d ever met!',
    },
  }],
  messages: {
    ['1']: [{
      from: 'Self',
      to: 'Tommy Madden',
      text: 'You are cool.'
    }, {
      from: 'Tommy Madden',
      to: 'Self',
      text: 'You are awesome!',
    }, {
      from: 'Self',
      to: 'Tommy Madden',
      text: 'Hey everyone! I just wanted to let you know that Eric and I will be hosting a New Years\' Eve party next Thursday night, and of course, you\'re all welcome to join us :)\nLet me know if you can make it!',
    }],
    ['2']: [{
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }, {
      from: 'Self',
      to: 'Michael Willis',
      text: 'Hey!',
    }, {
      from: 'Michael Willis',
      to: 'Self',
      text: 'Hello! How are you doing?',
    }],
    ['3']: [{
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
    default:
      return state;
  }
}
