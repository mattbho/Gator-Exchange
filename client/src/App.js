import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import SearchBar from './components/searchbar';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Gator Exchange</h1>
        <p>Current Available Categories: Books, Clothes, Miscellaneous</p>
        <SearchBar/> 
      </div>
    );
  }
}

export default App;
