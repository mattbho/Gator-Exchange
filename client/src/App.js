import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import SearchBar from './components/searchbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  //This function updates the state of this component. This only stores the variable. Have not implemented search route.
  componentDidMount(){
    fetch('/api/hello')
    .then(response => response.json())
    .then(json => {
      let text = json.message;
      this.setState({text});
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <SearchBar/> 
        <h1>{this.state.text} from Backend</h1>
      </div>
    );
  }
}

export default App;
