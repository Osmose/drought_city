import React, {Component, PropTypes as pt} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from './';
import Map from './components/Map';

@connect(state => state.map.toJS())
export default class MapApp extends Component {
  static propTypes = {
    dispatch: pt.func.isRequired,
  };

  componentWillMount() {
    this.props.dispatch(actionCreators.getMaps());
    if (this.props.currentMapName === null) {
      this.props.dispatch(actionCreators.setCurrentMap('Lol Map'));
    }
  }

  render() {
    const {dispatch, maps, currentMapName} = this.props;

    const currentMap = maps[currentMapName];

    if (currentMap) {
      return <Map {...currentMap}/>;
    } else {
      return null;
    }
  }
}
