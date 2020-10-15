import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userActions from "../actions/user"

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { error,isFetching,user } = this.props.user
    let data
    if(error) {
      data = error
    }else if(isFetching) {
      data = "Loading..."
    }else{
      data = user.title
    }
    return ( 
      <div className="container text-center">
        <p className="text-center">{ data }</p>
        <p className="text-center">User</p>
        <button className="btn btn-primary" onClick={()=>{this.props.userActions.get_user()}}>getUser</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userActions: bindActionCreators(userActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);