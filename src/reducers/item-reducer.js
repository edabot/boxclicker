import * as types from '../actions/action-types';

export default (state={}, action) => {
  let newItem = {}
  switch (action.type) {
    case types.BUY_ITEM:
      newItem[action.itemName] = action.level
      return {...state, ...newItem}
    case types.SHOW_ITEM:
      newItem[action.itemName] = 'available'
      return {...state, ...newItem}
    case types.RESET_ITEMS:
      return {...action.items}
    default:
      return state;
  }
}
