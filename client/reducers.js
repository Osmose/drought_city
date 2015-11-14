import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import welcome from './welcome';

const rootReducer = combineReducers({
  router,
  welcome,
});

export default rootReducer;
