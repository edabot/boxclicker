import * as types from '../actions/action-types';

export default (state = {count: 0, clickValue: 1, increment: 0}, action) => {
  switch (action.type) {
    case types.CLICK_BOX:
      return {...state, ...{count: state.count + state.clickValue}}
    case types.UPDATE_BOX:
      return {...state, ...{count: action.total}}
    case types.INCREMENT_BOX:
      return {...state, ...{count: state.count + state.increment}}
    case types.RESET_BOX:
      return {...action.box}
    case types.BUY_ITEM:
      return {...state, ...{count: state.count - action.cost}}
    case types.INCREASE_CLICK:
      return {...state, ...{clickValue: state.clickValue + action.value}}
    case types.INCREASE_INCREMENT:
      return {...state, ...{increment: state.increment + action.value}}
    case types.RESET_CLICK:
      return {...state, ...{clickValue: action.value}}
    case types.RESET_INCREMENT:
      return {...state, ...{increment: action.value}}
    default:
      return state;
  }
}
