import * as types from '../actions/action-types';

export default (state={}, action) => {
  switch (action.type) {
    case types.BUY_ITEM:
      let newItem = {}
      newItem[action.itemName] = action.level
      return {...state, ...newItem}
    default:
      return state;
  }
}
