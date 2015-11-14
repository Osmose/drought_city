import React, {Component, PropTypes as pt} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: pt.any.isRequired,
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>{' '}
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
