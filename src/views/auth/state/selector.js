import { namespace } from './constants';

export const authState = state => state[namespace];

export const userInfoSelector = state => authState(state).userInfo;

export default authState;
