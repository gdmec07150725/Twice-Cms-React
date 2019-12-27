/* 处理action */

import { handleActions } from 'redux-actions';

export const userInfo = handleActions(
  {
    'REQUEST_USER_INFO': function(state, action) {
      return { ...state, loading: true };
    },
    'RECEIVE_USER_INFO': function(state, action) {
      const { payload: { res } } = action;
      return { ...state, weatherInfo: res, loading: false }
    }
  },
  {} // 初始值
)