import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form>
          <div>
            <label>Username/Email</label>
            <input type="text" name="Username" required />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="Password" required />
          </div>
        </form>
        <div>
          <p>
            Need an account? Register
            <Link
              to={{
                pathname: "/Register"
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

export default Login;
