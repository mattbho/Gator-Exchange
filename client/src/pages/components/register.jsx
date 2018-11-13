import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Register</h3>
        <form>
          <div>
            <label>Username </label>
            <input type="text" name="Username" />
          </div>
          <div>
            <label>Email </label>
            <input type="email" name="Email" />
          </div>
          <div>
            <label>Password </label>
            <input type="password" name="Password" />
          </div>
          <div>
            <label>Verify Password </label>
            <input type="password" name="Password" />
          </div>
          <div>
            <label>SFSU ID </label>
            <input type="number" name="sfsu-id" />
          </div>
          <button type="submit">Register</button>
        </form>
        <div>
          <p>
            Need an account? Log in
            <Link
              to={{
                pathname: "/Login"
              }}
            >
              {" "}
              here!
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
