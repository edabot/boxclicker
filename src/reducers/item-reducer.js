import * as types from '../actions/action-types';

export default (state=100, action) => {
  switch (action.type) {
    case types.CLICK_BOX:
      return state+100
    default:
      return state;
  }
}
