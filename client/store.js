/* globals module, require */
import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {devTools} from 'redux-devtools';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

import rootReducer from './reducers';
import routes from './routes';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({routes, createHistory}),
  devTools()
)(createStore);

export default function configureStore() {
  const store = finalCreateStore(rootReducer);

  if (module && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers'); // eslint-disable-line import/no-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
