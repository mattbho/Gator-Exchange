import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <div className="Banner">
          <div>SFSU College Student?</div>
          <div>Buy and Sell with students around you!</div>
        </div>
        <br />

        <div className="Header">Recent Listings</div>

        <recent className="Recent">
          <div className="Column">
            <img
              className="postPhoto"
              src={require("../example/exampleBook.jpg")}
              width="200"
              height="250"
              alt="post"
            />
            <h2>$35</h2>
            <p>Shakespear Book</p>
          </div>

          <div className="Column">
            <img
              className="postPhoto"
              src={require("../example/exampleClothes.jpg")}
              width="200"
              height="250"
              alt="post"
            />
            <h2>$5</h2>
            <p>White Shirt</p>
          </div>

          <div className="Column">
            <img
              className="postPhoto"
              src={require("../example/exampleMisc.jpg")}
              width="200"
              height="250"
              alt="post"
            />
            <h2>$65</h2>
            <p>Office Chair</p>
          </div>
        </recent>

        <div className="Header">Under $25</div>
        <under25 className="Recent">
          <div className="Column">
            <img
              className="postPhoto"
              src={require("../example/pencil.jpg")}
              width="200"
              height="250"
              alt="post"
            />
            <h2>$8</h2>
            <p>Lead Pencil</p>
          </div>

          <div className="Column">
            <img
              className="postPhoto"
              src={require("../example/notebook.jpg")}
              width="200"
              height="250"
              alt="post"
            />
            <h2>$3</h2>
            <p>Notebook</p>
          </div>

          <div className="Column">
            <img
              className="postPhoto"
              src={require("../example/calculator.jpg")}
              width="200"
              height="250"
              alt="post"
            />
            <h2>$20</h2>
            <p>Calculator </p>
          </div>
        </under25>

        <div>
          Can't find what you are looking for? Try searching by category
        </div>
      </div>
    );
  }
}
