import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer.js';
import allSagas from './rootSaga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

  sagaMiddleware.run(allSagas);

  return store;
}

export default store;
