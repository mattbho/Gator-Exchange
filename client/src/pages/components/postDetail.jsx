import React, { Component } from "react";

class PostDetail extends Component {

  render() {
    const item = this.props.list;
    return (
        <div>
          {item.map((item, k) => {
            return (
              <div className="UniqueName" key = {k}>
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
                <p>{item.category}</p>
                <p>Seller #{item.sellerId}</p>
              </div>
            );
          })}
        </div>
      
    );
  }
}

export default PostDetail;
