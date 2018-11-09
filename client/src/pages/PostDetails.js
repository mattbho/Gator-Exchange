import React from "react";
import Post from './components/posts';

export default class PostDetails extends React.Component{
    state = {
        query: "",
        items: null
      };
      search() {
        fetch(`${process.env.API_URL || ''}/api/${this.state.query}`)
          .then(response => response.json())
          .then(json => {
            this.setState({ items: json });
          });
      }

    render(){
        let items = "Books"
        this.search();
        return(
            <div>
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
