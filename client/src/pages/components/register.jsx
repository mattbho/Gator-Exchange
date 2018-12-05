
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {};
  render() {
    return (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-5 mx-auto">
                <div className="card card-signin flex-row my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    {/* Form register */}
                    <form className="form-signin">
                      <div className="form-label-group">
                          <input type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus ></input>
                          <label for="inputUserame">Username</label>
                      </div>
                      <div className="form-label-group">
                          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required></input>
                          <label for="inputEmail">Email Address</label>
                      </div>
                      <div className="form-label-group">
                          <input type="number" id="inputID" class="form-control" placeholder="SFSU ID" required></input>
                          <label for="inputID">SFSU ID</label>
                      </div>
              
                      <hr></hr>

                        <div className="form-label-group">
                          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                          <label for="inputPassword">Password</label>
                        </div>
              
                        <div className="form-label-group">
                          <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Confirm Password" required></input>
                          <label for="inputConfirmPassword">Confirm password</label>
                        </div>
                      
                        <button className="btn btn-lg btn-block text-uppercase" type="submit">Register</button>
                        <Link
                          to={{
                           pathname: "/Login"
                           }}
                          >
                           {" "}
                           <div className = "d-block text-center mt-8 medium">Sign In </div>
                        </Link>
                        <hr class="my-4"></hr>     
                    </form>
                 </div>
              </div>
            </div>
          </div>
        </div>  
  
    );
  }
}

export default Register;