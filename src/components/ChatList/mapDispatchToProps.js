import { threadSelected } from 'views/chat/state/actions';

export const mapDispatchToProps = dispatch => ({
  threadSelected: (threadId) => dispatch(threadSelected(threadId)),
});

export default mapDispatchToProps;
