import { namespace } from './constants';

export const chatSelector = state => state[namespace];

export const selectedThreadSelector = state => {
  const threadId = chatSelector(state).selectedThreadId;

  const thread = chatSelector(state).threads.find(({ id }) => id === threadId);

  return {
    thread,
  };
};

export const messagesSelector = state => {
  const threadId = chatSelector(state).selectedThreadId;

  const messages = chatSelector(state).messages[threadId] || [];

  return {
    messages,
  };
};

export default {
  chatSelector,
  selectedThreadSelector,
  messagesSelector,
};
