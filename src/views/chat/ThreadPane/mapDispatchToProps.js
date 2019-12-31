import { threadSelected, messageModalOpened, threadsReceived, messageReceived, messagesReceived } from '../state/actions';

export const mapDispatchToProps = dispatch => ({
  threadSelected: (threadId) => dispatch(threadSelected(threadId)),
  messageModalOpened: () => dispatch(messageModalOpened()),
  threadsReceived: (threads) => dispatch(threadsReceived(threads)),
  messageReceived: (message) => dispatch(messageReceived(message)),
  messagesReceived: (threadId, messages) => dispatch(messagesReceived(threadId, messages)),
});

export default mapDispatchToProps;
