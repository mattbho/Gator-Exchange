import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styling/about.css";
import "./styling/navbar.css";
import "./styling/errorpage.css";
import "./styling/homepage.css";
import "./styling/details.css";
import "./styling/register.css";
import "./styling/login.css";



import NavBar from "./pages/components/navbar";
import SearchBar from "./pages/components/searchbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import PostDetails from "./pages/PostDetails";
import SearchResults from "./pages/components/search-results";
import SellForm from "./pages/components/sell-form";
import Login from "./pages/components/login";
import Register from "./pages/components/register";

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <p>SFSU-Fulda Software Engineering Project CSC648-848, Fall 2018. For Demonstration Only</p>
          <h1>Team 11</h1>
          <NavBar />
          <SearchBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/PostDetails" component={PostDetails} />
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/Sell" component={SellForm} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
