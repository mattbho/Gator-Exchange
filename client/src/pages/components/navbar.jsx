import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <ul className = "NavBar">
          <li><a className = "Home" href = "/"> Gator Exchange</a> </li>
          <li><a className = "About" href = "About"> About</a></li>
          <li><a className = "Sell" href = "Sell"> Sell</a></li>           
        </ul>
    );
  }
}

export default NavBar;
