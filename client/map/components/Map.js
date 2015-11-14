import React, {Component, PropTypes as pt} from 'react';

import MapItem from './MapItem';

export default class Map extends Component {
  static propTypes = {
    name: pt.string.isRequired,
    width: pt.number.isRequired,
    height: pt.number.isRequired,
    background: pt.string.isRequired,
    map_items: pt.arrayOf(pt.object).isRequired,
  }

  render() {
    let {name, width, height, background, map_items} = this.props;
    let style = {
      backgroundImage: `url(${background})`,
      width: width,
      height: height,
    };

    return (
      <div style={style}>
        <h1>{name}</h1>
        <div>
          {map_items.map((item, idx) => <MapItem key={`map-item-${idx}`} {...item}/>)}
        </div>
      </div>
    );
  }
}
