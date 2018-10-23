import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  
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
        <h1>{this.state.text} from Backend</h1>
      </div>
    );
  }
}

export default App;
