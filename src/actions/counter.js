import * as actions from "../constants/counter"

export function increment(num) {
  return {
    type: actions.INCREMENT,
    num
  }
}

export function decrement(num) {
  return {
    type: actions.DECREMENT,
    num
  }
}

export function asyncIncrement(num) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(num))
    }, 2000);
  }
}
