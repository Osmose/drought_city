import React, {Component, PropTypes as pt} from 'react';
import {Link} from 'react-router';

import MapApp from '../map/container';

export default class App extends Component {
  static propTypes = {
    children: pt.any.isRequired,
  }

  render() {
    return (
      <div className="game-wrapper">
        <header>
          <section>
            <img className="character" src="/static/assets/cat-protagonist-tabby.svg" />
            <div id="hp" className="progress">
              <span>HP: </span>
              { /* progress bar */ }
            </div>
            <div id="mp" className="progress">
              <span>MP: </span>
              { /* progress bar */ }
            </div>
          </section>
        </header>
        <div id="playarea" className="level">
          <MapApp />
          <img className="enemy" src="/static/assets/cat-enemy-purple.svg" />
        </div>
      </div>
    );
  }
}
