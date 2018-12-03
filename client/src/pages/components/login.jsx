import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <body className="my-login-page">
	    <section className="h-100">
		  <div className="container h-100">
			  <div className="row justify-content-md-center h-100">
				  <div className="card-wrapper">
					  <div className="card fat">
						  <div className="card-body">
							<h4 className="card-title">Login</h4>
							{/* Requires validation still needs to be done */}
							<form method="POST" className="my-login-validation" novalidate="">
								  <div className="form-group">
									  <label for="email">E-Mail Address</label>
									  <input id="email" type="email" className="form-control" name="email" required autofocus></input>
									      <div className="invalid-feedback">
									      	Email is invalid
									      </div>
								  </div>
									{/* Requires forget password still needs to be  */}
								  <div className="form-group">
									    <label for="password">Password
										  <a href="forgot.html" className="float-right">
											  Forgot Password?
									    	</a>
									    </label>
									    <input id="password" type="password" className="form-control" name="password" required data-eye></input>
								          <div className="invalid-feedback">
								    	        Password is required
							    	      </div>
								  </div>

								<div className="form-group m-0">
									<button type="submit" className="btn btn-block">
										Login
									</button>
								</div>
                <div className = "d-block text-center mt-8 medium"> Need an Account? 
								    <Link
                        to={{
                        pathname: "/Register"
                        }}
                        >
                        {" "}
                        Register
                    </Link>
                </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<script src="js/jquery.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="js/my-login.js"></script>
</body>
    );
  }
}

export default Login;
