import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";



class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
          <ul className="NavBar">
            <li><Link to = "/" className = "Home" > Gator Exchange</Link> </li>
            <li><Link to= "/About" className = "About">About</Link></li>
            <li><Link to= "/Sell" className = "Sell">Sell</Link></li>
          </ul>

        </nav>

        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/About" component = {About}></Route>
        <Route path = "/Sell" component = {Error}></Route>
      </div>
      </Router>

    );
  }
}


export default NavBar;
