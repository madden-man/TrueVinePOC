import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import selector from '../state/selector';

import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

import mapDispatchToProps from '../state/mapDispatchToProps';

export const LoginPage = ({ showRegistrationForm, userInfo, userInfoReceived, children }) => {
  useEffect(() => {
    const userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'));

    if (userInfo && userInfo.username) {
      userInfoReceived(userInfo);
    }
  }, []);

  if (window.sessionStorage.getItem('userinfo') || (userInfo && userInfo.username)) {
    return children;
  }

  return showRegistrationForm ? <RegisterForm /> : <LoginForm />;
};

export default connect(selector, mapDispatchToProps)(LoginPage);
