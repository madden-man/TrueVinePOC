import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import mapDispatchToProps from './mapDispatchToProps';

export const LogoutLink = ({ userLoggedOut }) =>
  <Link
    to="/"
    onClick={userLoggedOut}
  >
    Logout
  </Link>;

export default connect(null, mapDispatchToProps)(LogoutLink);
