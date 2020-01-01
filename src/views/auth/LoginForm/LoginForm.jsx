import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import socketIOClient from 'socket.io-client';

import mapDispatchToProps from '../state/mapDispatchToProps';

import './loginForm.css';

export const LoginForm = ({ toggleRegistrationForm, userInfoReceived }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      
      const socket = socketIOClient('http://localhost:8080');

      socket.emit('attempted_login', { username, password }, (userInfo) => userInfo && userInfoReceived(userInfo));
    }}>
      <section className="login-container">
        <h1>Login Please!</h1>
        <h3>Username</h3>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <h3>Password</h3>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />
        <button onClick={toggleRegistrationForm}>Register Instead!</button>
      </section>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(LoginForm);
