import React, {Component, PropTypes as pt} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {actionCreators} from './';

@connect(state => state.welcome.toJS())
export default class WelcomeApp extends Component {
  static propTypes = {
    dispatch: pt.func.isRequired,
  };

  render() {
    const {dispatch} = this.props;
    // const {} = bindActionCreators(actionCreators, dispatch);

    return (
      <div>
        <h1>Drought City</h1>
      </div>
    );
  }
}
