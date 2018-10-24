import React, { Component } from "react";
import Post from './posts';

class SearchBar extends Component {
  state = {
    query: "",
    items: null
  };
  search() {
    fetch("api/" + this.state.query)
      .then(response => response.json())
      .then(json => {
        let items = json;
        this.setState({ items: items });
        //console.log(this.state.items);
      });
  }


  render() {
    let items = this.state.items;
    return (
      <div className="Search">
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for your item by Categories"
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <div className="input-group-append">
              <span
                className="input-group-text"
                onClick={() => {
                  this.search();
                }}
              >
                Search
              </span>
            </div>
          </div>
        </div>
        {this.state.items !== null ? (
          <div>
            <Post list = {items}/>
          </div>
        ) : (
          <div/>
        )}
      </div>
      
    );
  }
}

export default SearchBar;
