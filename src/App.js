import React from 'react';
import { Provider } from 'react-redux';
import AppHelmet from './config/AppHelmet';
import AppRouter from './config/AppRouter';
import LoginPage from 'views/auth/LoginPage';

import './App.css';
import configureStore from './config/redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <AppHelmet />
      <LoginPage>
        <AppRouter />        
      </LoginPage>
    </Provider>
  );
}

export default App;
