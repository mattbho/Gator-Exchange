import React, { Component } from 'react';
class Post extends Component {

  render() { 
    const item = this.props.list;
    return ( 
      <a href = "PostDetails">
      <div>
        {item.map((item, k) => {
          return(
            <div className="Column">
            <img 
            className="postPhoto"
            src = {item.image}
            width="200"
            heigh="250"
            alt="post"/>
            <h2>$ {item.price}</h2>
            <p>{item.title}</p>
            <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      </a>
     );
  }
}
 
export default Post;