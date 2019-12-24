import chatSagas from 'views/chat/state/sagas';
import { all, fork } from 'redux-saga/effects';

export default function* root() {
  yield all([
    ...chatSagas,
  ].map(saga => fork(saga)));
};
