import React from "react";
import Post from './components/posts';

export default class Home extends React.Component {
  state = {
    items: null
  };
  search() {
    fetch(`${process.env.API_URL || ''}/allItems`)
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json });
      });
  }

  render() {
    let items = this.state.items;
    this.search();
    return (
      <div className="Welcome">
        <div className="Banner">
          <div>SFSU College Student?</div>
          <div>Buy and Sell with students around you!</div>
        </div>
        <br/>

        <div className="Header">Recent Listings</div>

        <recent className="Recent">
        <div>
            {this.state.items !== null ? (
                <div>
                  <Post list = {items}/>
                </div>
              ) : (
                <div/>
              )}
        </div>
        </recent>

        <div>
          Can't find what you are looking for? Try searching by category.
        </div>
      </div>
    );
  }
}
