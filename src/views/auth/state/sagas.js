import { takeEvery } from 'redux-saga/effects';

import actionTypes from './actionTypes';

export function* sessionStoreUserInfo(userInfo) {
  const currentInfo = window.sessionStorage.getItem('userinfo');

  if (!currentInfo || JSON.parse(currentInfo).username !== userInfo.username) {
    window.sessionStorage.setItem('userinfo', JSON.stringify(userInfo));
  }
};

export function* removeSessionInfo() {
  if (window.sessionStorage.getItem('userinfo')) {
    window.sessionStorage.removeItem('userinfo');
  }
}

export function* watchUserInfoReceived() {
  yield takeEvery(actionTypes.USER_INFO_RECEIVED, (action) => sessionStoreUserInfo(action.payload.userInfo));
};

export function* watchUserLoggedOut() {
  yield takeEvery(actionTypes.USER_LOGGED_OUT, () => removeSessionInfo());
}

const sumSaga = [
  watchUserInfoReceived,
  watchUserLoggedOut,
];

export default sumSaga;
