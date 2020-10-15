import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  //error->错误 errorInfo->错误信息提示
  componentDidCatch(error,errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() { 
    if(this.state.hasError){
      return <div>{ this.props.render(this.state.error,this.state.errorInfo) }</div>
    }
    return this.props.children
  }
}
 
export default ErrorBoundary;