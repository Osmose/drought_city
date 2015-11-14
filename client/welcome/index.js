import Immutable from 'immutable';

import {checkPropType} from '../utils/proptypes';

function initialState() {
  return Immutable.fromJS({
  });
}

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    default:
      return state;
  }
}
