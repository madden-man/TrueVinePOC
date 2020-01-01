import { combineReducers } from 'redux';
import auth from 'views/auth/state/reducer';
import chat from 'views/chat/state/reducer';

export default combineReducers({
  auth,
  chat,
});
