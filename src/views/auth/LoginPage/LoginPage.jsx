import React from 'react';
import { useState } from 'react';

import './loginPage.css';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="login-container">
      <h1>Login Please!</h1>
      <h3>Username</h3>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <h3>Password</h3>
      <input type="password" name="userpassword" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" />
    </section>
  );
}

export default LoginPage;
