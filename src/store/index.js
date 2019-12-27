/* 需要区分开发环境和生成环境动态引入store */

import rootReducer from '@/reducers';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

const win = window;

// use middlewares
const middlewares = [thunk];

// compose prower
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
export default function configureStore(initialstate) {
  return createStore(rootReducer, initialstate, storeEnhancers);
}
