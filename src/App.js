import React from 'react';
import { Provider } from 'react-redux';
import AppHelmet from './config/AppHelmet';
import AppRouter from './config/AppRouter';

import './App.css';
import configureStore from './config/redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <AppHelmet />
      <AppRouter />
    </Provider>
  );
}

export default App;
