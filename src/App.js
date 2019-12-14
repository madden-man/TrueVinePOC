import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './config/AppRouter';

import './App.css';
import configureStore from './config/redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <AppRouter />
    </Provider>
  );
}

export default App;
