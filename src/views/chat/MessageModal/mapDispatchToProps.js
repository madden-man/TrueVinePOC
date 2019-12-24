import { messageModalClosed, messageSent } from '../state/actions';

export const mapDispatchToProps = dispatch => ({
  messageModalClosed: () => dispatch(messageModalClosed()),
  messageSent: (message) => dispatch(messageSent(message)),
});

export default mapDispatchToProps;
