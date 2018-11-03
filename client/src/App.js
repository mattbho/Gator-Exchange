import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import NavBar from "./components/navbar";
import SearchBar from './components/searchbar';

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";


class App extends Component {
 
  render() {
    return (

      <BrowserRouter>
        <div>
        <NavBar/>
        <SearchBar/> 
        
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route component={Error}/>

        </Switch>
        </div>
        
      
      
      </BrowserRouter>











      /*
      <div className="App">
        <NavBar/>
        <h1>Gator Exchange</h1>
        <p>Current Available Categories: Books, Clothes, Miscellaneous</p>
        <SearchBar/> 
      </div>
      */
    );
  }
}

export default App;
