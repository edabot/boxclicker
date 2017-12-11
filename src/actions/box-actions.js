import * as types from './action-types'

export const clickBox = (increment) => {
  return {
    type: types.CLICK_BOX,
    increment
  }
}

export const updateBox = (total) => {
  return {
    type: types.UPDATE_BOX,
    total
  }
}
