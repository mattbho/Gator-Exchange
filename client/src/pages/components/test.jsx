import React from "react";
import Post from "./components/posts";

export default class Home extends React.Component {
  state = {
    items: null
  };
  componentDidMount() {
    fetch(`/allItems`)
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json });
      });
  }

  render() {
    let items = this.state.items;
    return (
      <div className="Welcome">
        <div className="Banner">
          <div>SFSU College Student?</div>
          <div>Buy and Sell with students around you!</div>
        </div>
        <br />

        <div className="Header">Recent Listings</div>







<div className="row2">
          <div class="card-group">
            <div class="card" href="hello">
              <img
                class="card-img-top"
                src={require("../aboutme/person.jpg")}
                alt="post1"
              />
              <div class="card-body">
                <h5 class="card-title">Project 4</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text" />
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={require("../aboutme/person.jpg")}
                alt="post2"
              />
              <div class="card-body">
                <h5 class="card-title">Project 5</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text" />
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={require("../aboutme/person.jpg")}
                alt="post3"
              />
              <div class="card-body">
                <h5 class="card-title">Project 6</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text" />
              </div>
            </div>
          </div>
        </div>







        <div className="Recent">
          {this.state.items !== null ? (
            <div>
              <Post list={items} />
              <script type="text/javascript" />
            </div>
          ) : (
            <div />
          )}
        </div>








        <div>
          Can't find what you are looking for? Try searching by category.
        </div>
      </div>
    );
  }
}


