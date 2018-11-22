import React, { Component } from 'react';
class Post extends Component {

  render() { 
    const item = this.props.list;
    return ( 
      <div>
        {item.map((item, k) => {
          return(
            <div>
            <p key = {k}>{item.title} {"$" + item.price}</p> 
            <img src = {item.image}/> 
            <p>{item.description}</p>
            </div>
          );
        })}
      </div>
     );
  }
}
 
export default Post;