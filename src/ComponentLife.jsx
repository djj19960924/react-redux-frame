import React, { Component } from 'react'

class ComponentLife extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 10
    }
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  /**
   * 
   * @param {*} nextProps 
   * @param {*} nextState 
   * 
   * 关于渲染问题
   */
  shouldComponentUpdate(nextProps,nextState) {
    //子组件是否改变的优化
    console.log("shouldComponentUpdate")
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  changeHandler = () => {
    this.setState({
      count:this.state.count+1
    })
  }

  clickChange = () => {
    this.props.clickChildChange()
  }

  render() { 
    const { count } = this.state
    return ( 
      <div>
        生命周期函数:{count} - {this.props.title}
        <button onClick={this.changeHandler}>修改</button>
        <button onClick={this.clickChange}>修改title</button>
      </div>
    );
  }
}
 
export default ComponentLife;