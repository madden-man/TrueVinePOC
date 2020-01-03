import { userLoggedOut } from 'views/auth/state/actions';

export const mapDispatchToProps = dispatch => ({
  userLoggedOut: () => dispatch(userLoggedOut()),
});

export default mapDispatchToProps;
