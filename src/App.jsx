import React, { Component } from 'react'
import api from "./api"
import Home from "./pages/Home"
import Mine from "./pages/Mine"
import { HashRouter as Router,Route,Link,Switch } from "react-router-dom"
import Nav from "./components/Nav"
import NotFound from "./pages/NotFound"
// import { increment,decrement } from "./store/actions/count"
import { connect } from "react-redux"
import * as counterAction from "./actions/counter"
import { bindActionCreators } from "redux"
import User from "./pages/user"

/**
 * HashRouter:锚点链接
 * BrowserRouter:h5新特性 /history.push 如果上线之后，需要后台做一些处理：重定向处理 404bug
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: []
    }
  }

  componentDidMount() {
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    .then(res => res.json())
    .then(data => {
      this.setState({
        banners: data.banner
      })
    })
    // fetch("v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(error=>{
    //   console.log(new Error(error))
    // })

    // fetch("/api/list")
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(error=>{
    //   console.log(new Error(error))
    // })

    api.getChengpin().then(res => res.json()).then(data => {
      console.log(data)
    })
    api.getLogin({
      user_id: 'iwen@qq.com',
      password: 'iwen123',
      verification_code: 'crfvw'
    }).then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  render() { 
    const { banners } = this.state
    // const { increment,decrement,count } = this.props
    console.log(this.props)
    return ( 
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          {
            // <button onClick={increment} className="btn btn-primary">increment</button>
            // <button onClick={decrement} className="btn btn-success">decrement</button>
          }
          <button onClick={()=>this.props.counterActions.asyncIncrement(10)} className="btn btn-primary">increment</button>
          <button onClick={()=>this.props.counterActions.decrement(5)} className="btn btn-success">decrement</button>
        </p>
        <User />

        {
          banners.length?(
            <ul>
              {
                banners.map((element,index)=>{
                  return <li key={index}>{ element.title }</li>
                })
              }
            </ul>
          ):<div>等待数据加载...</div>
        }
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/home" component={ Home } />
            <Route exact path="/mine" component={ Mine } />
            <Route path="/demo" render={()=><div>Hello demo</div>} />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    counter: state.counter
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increment: ()=>{ dispatch(increment()) },
//     decrement: ()=>{ dispatch(decrement()) }
//   }
// }

//使用bindActionCreators方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    counterActions:bindActionCreators(counterAction,dispatch)
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App);