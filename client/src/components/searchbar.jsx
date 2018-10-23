import React, { Component } from 'react';
class SearchBar extends Component {
  state = { 
    query: ''
   }
  search(){
    //Implement search after creating backend route api/posts
  }
  
  render() { 
    return ( 
      <div className = "form-group">
        <div className = "input-group">
          <input type = "text" 
            className = "form-control" 
            placeholder= "Search for your item"
            onChange = {event => {
              this.setState({query: event.target.value})
            }}
            onKeyPress = {event => {
              if(event.key === "Enter") {
                console.log("Success", this.state.query);
              }
            }}
            />
            <div className = "input-group-append">
              <span className = "input-group-text" 
                    onClick = {()=>{
                      console.log("Success from click", this.state.query)
                    }
              }>Search</span>
            </div>
        </div>
      </div>
     );
  }
}
 
export default SearchBar;