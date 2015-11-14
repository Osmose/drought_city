import React, {Component, PropTypes as pt} from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';

export default class Root extends Component {
  static propTypes = {
    store: pt.any.isRequired,
  }

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <ReduxRouter/>
      </Provider>
    );
  }
}
