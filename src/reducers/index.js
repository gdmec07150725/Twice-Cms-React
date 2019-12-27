import { combineReducers } from 'redux';
import * as user from './user';

const rootReducer = combineReducers({
  ...user
})

export default rootReducer;
