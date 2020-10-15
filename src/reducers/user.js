import * as actions from "../constants/user"

const initialState = {
  user: {},
  isFetching: false,
  error: null
}

const counter = ( state=initialState,action ) => {
  switch(action.type){
    case actions.ADD_USER:
      // 三大原则之一：state是只读的，唯一改变 state的方法就是触发action是一个用于描述已发生事件的普通对象
      return {
        isFetching: false,
        user: action.user,
        error: null
      }
    case actions.FETCH_USER_REQUEST:
      return {
        isFetching: true,
        user: {},
        error: null
      }
    case actions.FETCH_USER_FAILURE:
      return {
        isFetching: false,
        user: {},
        error: action.error
      }
    default:
      return state
  } 
}

export default counter