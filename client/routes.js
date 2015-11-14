import React from 'react';
import {ReduxRouter} from 'redux-router';
import {Route, IndexRoute} from 'react-router';

import App from './common/container';
import WelcomeApp from './welcome/container';
import GameApp from './game/container';

const routes = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomeApp}/>
      <Route path="/game" component={GameApp}/>
    </Route>
  </ReduxRouter>
);
export default routes;
