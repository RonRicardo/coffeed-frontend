import { combineReducers } from 'redux';
import friendReducer from './friendReducer';
import planReducer from './planReducer';

const rootReducer = combineReducers({
  friends: friendReducer,
  plans: planReducer
})

export default rootReducer;
