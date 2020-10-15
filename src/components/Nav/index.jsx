import React, { Component } from 'react'
import { Link,NavLink } from "react-router-dom"
import "./style.css"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to="/home">Home页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/mine">Mine页面</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;