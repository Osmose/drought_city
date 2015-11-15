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
      <div className="home">
        <img src="/static/assets/title.svg" className="title" title="Drought" />
        <h2>City</h2>
        <img className="character" src="/static/assets/cat-protagonist-tabby.svg" />
      </div>
    );
  }
}
