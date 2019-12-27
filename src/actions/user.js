import { createAction } from 'redux-actions';
import { user } from '@/api';
import { createAjaxAction } from '@/common/ajaxActions';

export const requestUserInfo = createAction('REQUEST_USER_INFO');
export const receiveUserInfo = createAction('RECEIVE_USER_INFO');
export const fetchUserInfo = createAjaxAction(user.userInfo, requestUserInfo, receiveUserInfo);