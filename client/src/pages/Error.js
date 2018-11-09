import React from "react";

export default class Error extends React.Component{

    state = {
        query: "",
        items: null
      };
      search() {
        fetch(`${process.env.API_URL || ''}/api/${this.state.query}`)
          .then(response => response.json())
          .then(json => {
            this.setState({ items: json });
            //console.log(this.state.items);
          });
      }
      
    render(){
        return(
            <div className="Error">Sorry, we couldn't find that page</div>
        );
    }
}
