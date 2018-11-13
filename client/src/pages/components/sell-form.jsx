import React, { Component } from "react";

export default class SellForm extends Components {
  constructor(props) {
    this.state = {};
  }
  render() {
    return (
      <div>
        <title>Create Listing/Sell</title>
        <form>
          <div>
            <label for="Category">Item Category:</label>

            <select name="Categories">
              <option value="Books">Books</option>
              <option value="Car">Car</option>
              <option value="Clothing">Clothing</option>
              <option value="Misc">Miscellaneous</option>
              <option value="Supplies">School Supplies</option>
            </select>
          </div>
          <div>
            <label for="Description">Item Description:</label>

            <textarea id="Description" name="Description" />
          </div>

          <div>
            <label for="Contact">Contact Information:</label>
            <textarea id="Contact" name="Contact" />
          </div>

          <div>
            <label for="Price">Price:</label>
            <textarea id="Price" name="Price" />
          </div>
        </form>
      </div>
    );
  }
}
