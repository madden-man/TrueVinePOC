import { takeEvery } from 'redux-saga/effects';

import actionTypes from './actionTypes';

export function* sessionStoreUserInfo(userInfo) {
  const currentInfo = window.sessionStorage.getItem('userinfo');

  if (!currentInfo || JSON.parse(currentInfo).username !== userInfo.username) {
    window.sessionStorage.setItem('userinfo', JSON.stringify(userInfo));
  }
};

export function* watchUserInfoReceived() {
  yield takeEvery(actionTypes.USER_INFO_RECEIVED, (action) => sessionStoreUserInfo(action.payload.userInfo));
};

const sumSaga = [
  watchUserInfoReceived,
];

export default sumSaga;
