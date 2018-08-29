import { combineReducers } from 'redux';
import friendReducer from './friendReducer';
import planReducer from './planReducer';
import navReducer from './navReducer';

const rootReducer = combineReducers({
  friends: friendReducer,
  plans: planReducer,
  nav: navReducer
})

export default rootReducer;
