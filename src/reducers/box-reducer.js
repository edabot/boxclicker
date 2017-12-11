import * as types from '../actions/action-types';

export default (state = 0, action) => {
  switch (action.type) {
    case types.CLICK_BOX:
      return state + 1
    default:
      return state;
  }
}
