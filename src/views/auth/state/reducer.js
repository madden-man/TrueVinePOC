import actionTypes from './actionTypes';

import './sagas';

const initialState = {
  userInfo: {},
  showRegistrationForm: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_REGISTRATION_FORM:
      return {
        ...state,
        showRegistrationForm: !state.showRegistrationForm,
      };
    case actionTypes.USER_INFO_RECEIVED:
      return {
        ...state,
        userInfo: action.payload.userInfo,
      };
    case actionTypes.USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}
