import React, { Component } from "react";

class Post extends Component {

  render() {
    const item = this.props.list;
    let itemId = "";
    return (
        <div>
          {item.map((item, k) => {
            itemId = item._id;
            return (
              <div className="Column">
                <a href={"PostDetails?itemId=" + itemId} key={k}>
                <img
                  className="postPhoto"
                  src={item.image}
                  width="200"
                  heigh="250"
                  alt="post"
                />
                <h2>$ {item.price}</h2>
                <p>{item.title}</p>
                <p>{item.description}</p>
                </a>
              </div>
            );
          })}
        </div>
      
    );
  }
}

export default Post;
