import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import welcome from './welcome/';
import map from './map/';

const rootReducer = combineReducers({
  router,
  welcome,
  map,
});

export default rootReducer;
