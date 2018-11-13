import React from "react";
import PostDetail from "./components/postDetail";

export default class PostDetails extends React.Component {
  state = {
    query: this.getVariable(),
    items: null
  };
  
  componentDidMount() {
    fetch(`/api/${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json });
      });
  }

  getVariable() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get("itemId");
  }

  render() {
    let items = this.state.items;
    console.log(this.getVariable());
    return (
      <div>
        {this.state.items !== null ? (
          <div>
            <PostDetail list={items} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
