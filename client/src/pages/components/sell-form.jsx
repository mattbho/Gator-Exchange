import React, { Component } from "react";
import { } from 'bootstrap';

export default class SellForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
/*
Styling By: Juan Valdez
The whole point of the sell-form styling is to create an appealing sell form 
where it is presentable and easy to use for a user. A card styl fill out form
without the upload image function and backend connection.
*/

  render() {
    return (
      //NEEDS UPLOAD IMAGE AND CONNECTION TO BACK END
      <div className="row justify-content-md-center h-100">
        <div className="card-wrapper w-50">
          <div className="card fat">
            <div className="card-body">
              <form>
                <div class=" form-group container-fluid">
                  <title>Create Listing/Sell</title>
                  <div class="row justify-content-md-center">
                    <h4 className="card-title">Create Listing/Sell</h4>
                  </div>
                  <div class="form-group row justify-content-md-center">
                    <div class="col-md-1.5">
                      <select class="custom-select">
                        <option selected>Select Category</option>
                        <option value="Books">Books</option>
                        <option value="Car">Car</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Misc">Miscellaneous</option>
                        <option value="Supplies">Supplies</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-md-center">
                    <label for="Item-Description">Item Description: </label>
                  </div>
                  <div class="form-group row justify-content-md-center">

                    <textarea class="form-control w-50" id="description" placeholder="Item Description"></textarea>
                  </div>
                  <div class="form-row justify-content-md-center">
                    <label for="Contact">Contact Information: </label>
                  </div>

                  <div class="form-group row justify-content-md-center">
                    <textarea class="form-control w-50" id="contact" placeholder="Contact Information"></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
