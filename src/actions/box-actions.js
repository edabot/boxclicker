import * as types from './action-types'

export const clickBox = () => {
  return {
    type: types.CLICK_BOX,
  }
}

export const updateBox = (total) => {
  return {
    type: types.UPDATE_BOX,
    total
  }
}

export const resetBox = (box) => {
  return {
    type: types.RESET_BOX,
    box
  }
}

export const increaseClick = (value) => {
  return {
    type: types.INCREASE_CLICK,
    value
  }
}

export const increaseIncrement = (value) => {
  return {
    type: types.INCREASE_INCREMENT,
    value
  }
}

export const resetClick = (value) => {
  return {
    type: types.RESET_CLICK,
    value
  }
}

export const resetIncrement = (value) => {
  return {
    type: types.RESET_INCREMENT,
    value
  }
}
