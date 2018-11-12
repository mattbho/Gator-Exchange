import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul className="NavBar">
          <li>
            <a className="Home" href="/">
              {" "}
              Gator Exchange
            </a>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
