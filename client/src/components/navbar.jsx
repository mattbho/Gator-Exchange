import React, { Component } from 'react';
import SearchBar from './searchbar';
class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav>
        <ul className = "NavBar">
          <li><a className = "Home" href = "/"> Gator Exchange</a> </li>
          <li><a className = "Categories" href = "Categories"> Categories</a></li>
                  
          <li><a className = "About" href = "About"> About</a></li>
          <li><a className = "Profile" href = "Profile"> Profile</a></li>
          <li><a className = "Sell" href = "Sell"> Sell</a></li>
                    
        </ul>
      </nav>
    );
  }
}
 
export default NavBar;