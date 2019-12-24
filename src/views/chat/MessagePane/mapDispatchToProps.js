import { messageSent } from '../state/actions';

export const mapDispatchToProps = dispatch => ({
  messageSent: (message) => dispatch(messageSent(message)),
});

export default mapDispatchToProps;
