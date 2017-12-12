import * as types from '../actions/action-types';

export default (state = 0, action) => {
  switch (action.type) {
    case types.CLICK_BOX:
      return state + action.increment
    case types.UPDATE_BOX:
      return action.total
    case types.BUY_ITEM:
      return state - action.cost
    default:
      return state;
  }
}
