import { toggleRegistrationForm } from './actions';
import { userInfoReceived } from './actions';

export const mapDispatchToProps = dispatch => ({
  toggleRegistrationForm: () => dispatch(toggleRegistrationForm()),
  userInfoReceived: (userInfo) => dispatch(userInfoReceived(userInfo)),
});

export default mapDispatchToProps;
