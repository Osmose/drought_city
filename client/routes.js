import React from 'react';
import {ReduxRouter} from 'redux-router';
import {Route, IndexRoute} from 'react-router';

import App from './common/container';
import WelcomeApp from './welcome/container';

const routes = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomeApp}/>
    </Route>
  </ReduxRouter>
);
export default routes;
