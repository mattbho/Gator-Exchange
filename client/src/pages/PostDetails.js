import React from "react";
import Post from "./components/posts";

export default class PostDetails extends React.Component {
  state = {
    items: null
  };
  
  

  componentDidMount() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const itemID = url.searchParams.get("itemId");
    fetch(`/api/${itemID}`)
    .then(response => response.json())
    .then(json => {
      this.setState({ items: json });
    });
  }
 
  

  render() {
    const {items} = this.state;
    // let items = this.state.items;
    return (
      <div>
        {this.state.items !== null ? (
          <div>
            <Post list={items} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
