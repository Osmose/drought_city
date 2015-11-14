import Immutable from 'immutable';

import {checkPropType} from '../utils/proptypes';

const SET_MAPS = 'drought_city/map/LOAD_MAPS';
const SET_CURRENT_MAP = 'drought_city/map/SET_CURRENT_MAP';

function initialState() {
  return new Immutable.Map()
    .set('maps', new Immutable.Map())
    .set('currentMapName', null);
}

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case SET_MAPS:
      return state.set('maps', action.payload);

    case SET_CURRENT_MAP:
      return state.set('currentMapName', action.payload);

    default:
      return state;
  }
}

export function getMaps() {
  return dispatch => {
    fetch('/api/maps/')
    .then(res => res.json())
    .then(maps => {
      let immutMaps = new Immutable.Map();

      for (let map of maps) {
        immutMaps = immutMaps.set(map.name, map);
      }

      dispatch({
        type: SET_MAPS,
        payload: immutMaps,
      });
    })
    .catch(err => console.error('Error fetching maps', err));
  }
}

export function setCurrentMap(name) {
  return {
    type: SET_CURRENT_MAP,
    payload: name,
  };
}
