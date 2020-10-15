import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from "redux-logger"

//中间件
// const logger = store => next => action =>{
//   console.log("dispatch->",action)
//   let result = next(action) //加载下一个中间件
//   console.log("next state->",store.getState())
//   return result
// }

// const error = store => next => action =>{
//   try {
//     next(action)
//   } catch (error) {
//     console.log("error->",error);
//   }
// }

//1.创建store对象
const store = createStore(rootReducer,composeWithDevTools(
  // applyMiddleware(thunk,logger,error)
  applyMiddleware(thunk,logger)
));

//2.暴露store对象
export default store;