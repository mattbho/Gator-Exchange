import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import SearchBar from "./searchbar";

//Contains Navbar and Searchbar components and Gator Exchange logo
//CSS done in navbar.css


export default class GENavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <img
              className="gator"
              src={require("../../aboutme/gator_exchange.jpg")}
              alt="gator"
              width="400px"
              height="140px"
            />
          </NavbarBrand>

          <NavbarToggler className="navToggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <SearchBar />
            <Nav className="navFormat" navbar>
              <NavItem className="navText">
                <NavLink href="/sell">Sell</NavLink>
              </NavItem>
              <NavItem className="navText">
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem className="navText">
                <NavLink href="/register">Register</NavLink>
              </NavItem>
              <NavItem className="navText">
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
