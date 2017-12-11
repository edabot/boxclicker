import * as types from './action-types'

export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    item
  }
}
