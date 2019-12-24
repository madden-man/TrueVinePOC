import { threadSelected, messageModalOpened, threadsReceived, messageReceived } from '../state/actions';

export const mapDispatchToProps = dispatch => ({
  threadSelected: (threadId) => dispatch(threadSelected(threadId)),
  messageModalOpened: () => dispatch(messageModalOpened()),
  threadsReceived: (threads) => dispatch(threadsReceived(threads)),
  messageReceived: (message) => dispatch(messageReceived(message)),
});

export default mapDispatchToProps;
