import React, {Component, PropTypes as pt} from 'react';
import {Provider} from 'react-redux';
import {DevTools} from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';
import {ReduxRouter} from 'redux-router';


export default class Root extends Component {
  static propTypes = {
    store: pt.any.isRequired,
  }

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter/>
          <DevTools store={store} monitor={DiffMonitor}/>
        </div>
      </Provider>
    );
  }
}
