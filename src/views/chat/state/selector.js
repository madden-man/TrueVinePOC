import { namespace } from './constants';

export const chatSelector = state => state[namespace];

export const selectedThreadIdSelector = state => state[namespace]?.selectedThreadId;

export const selectedThreadSelector = state => {
  const selectedThreadId = selectedThreadIdSelector(state);

  const thread = chatSelector(state).threads.find(({ id }) => id === selectedThreadId);

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

export const messageModalSelector = state => {
  const isModalOpen = state[namespace]?.isModalOpen;

  return {
    isModalOpen,
  };
}

export default {
  chatSelector,
  selectedThreadSelector,
  messagesSelector,
  messageModalSelector,
};
