import actionTypes from './actionTypes';

export const toggleRegistrationForm = () => ({
  type: actionTypes.TOGGLE_REGISTRATION_FORM,
});

export const userInfoReceived = (userInfo) => ({
  type: actionTypes.USER_INFO_RECEIVED,
  payload: {
    userInfo,
  },
});

export default {
  toggleRegistrationForm,
  userInfoReceived,
};
