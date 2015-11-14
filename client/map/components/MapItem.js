import React, {Component, PropTypes as pt} from 'react';

import MapItem from './MapItem';

export default class Map extends Component {
  static propTypes = {
    location: pt.string.isRequired,
    top: pt.number.isRequired,
    left: pt.number.isRequired,
    width: pt.number.isRequired,
    height: pt.number.isRequired,
    image: pt.string.isRequired,
  }

  handleClick() {
    console.log('hi!');
  }

  render() {
    let {location, top, left, width, height, image} = this.props;
    let style = {
      backgroundImage: `url(${image})`,
      width: width,
      height: height,
      top: top,
      left: left
    };

    return (
      <div style={style} onClick={this.handleClick.bind(this)}/>
    );
  }
}
