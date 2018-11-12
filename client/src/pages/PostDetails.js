import React from "react";
import Post from './components/posts';

export default class PostDetails extends React.Component{
    state = {
        query: "Clothes",
        items: null
      };
      search() {
        
        fetch(`/api/${this.state.query}`)
          .then(response => response.json())
          .then(json => {
            this.setState({ items: json });
          });
      }

    render(){
        let items = this.state.items;
        
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
