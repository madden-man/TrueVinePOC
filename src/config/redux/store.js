import { createStore, applyMiddleware, compose } from 'redux';
import saga from 'redux-saga';
import rootReducer from './rootReducer.js';

export default () =>
  createStore(
    rootReducer,
    compose(
     /* applyMiddleware(saga), */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );
