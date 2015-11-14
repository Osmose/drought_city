import React, {Component, PropTypes as pt} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: pt.any.isRequired,
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}
