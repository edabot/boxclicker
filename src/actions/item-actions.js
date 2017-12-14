import * as types from './action-types'

export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    item
  }
}

export const buyItem = (itemName, level, cost) => {
  return {
    type: types.BUY_ITEM,
    itemName,
    level,
    cost
  }
}

export const showItem = (itemName) => {
  return {
    type: types.SHOW_ITEM,
    itemName
  }
}

export const resetItems = (items) => {
  return {
    type: types.RESET_ITEMS,
    items
  }
}
