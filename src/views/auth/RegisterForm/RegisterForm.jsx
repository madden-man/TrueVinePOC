import React, { useState } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import mapDispatchToProps from '../state/mapDispatchToProps';

import './registerForm.css';

export const RegisterForm = ({ toggleRegistrationForm }) => {
  const [fields, setFields] = useState({
    name: '',
    username: '',
    password: '',
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      const socket = socketIOClient('http://localhost:8080');

      socket.emit('account_created', fields);
    }}>
      <section className="register-container">
        <h1>Register Please!</h1>
        <h3>Name</h3>
        <input type="text" name="username" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
        <h3>Username</h3>
        <input type="text" name="username" value={fields.username} onChange={(e) => setFields({ ...fields, username: e.target.value })} />
        <h3>Password</h3>
        <input type="password" name="password" value={fields.password} onChange={(e) => setFields({ ...fields, password: e.target.value })} />
        <input type="submit" />
        <button onClick={toggleRegistrationForm}>Login Instead!</button>
      </section>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(RegisterForm);
