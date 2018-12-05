import React from "react";

//User Dashboard Page

export default class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = { info: "Press menu selection to change" };
  }

  //State for previously bought items
  previouslyBought = () => {
    this.setState({ info: "previously-bought" });
  };

  //State for current active selling post from the user
  mySelling = () => {
    this.setState({ info: "my-selling" });
  };

  //State for user profile account information, username, contact info, etc.
  userProfile = () => {
    this.setState({ info: "user-profile" });
  };


  render() {
    return (
    
      <div classname="dash-menu">
        <div
          class="btn-group-vertical"
          role="group"
          aria-label="Dashboard Buttons"
        >
          <div class="dash-title">My Dashboard</div>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.previouslyBought}
          >
            Previously Bought
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.mySelling}
          >
            My Selling
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.userProfile}
          >
            User Profile
          </button>

          
        </div>

        <div className="dashboardDisplay">{this.state.info}</div>
      </div>
    );
  }
}

// div, className = "dashboardDisplay" is a state that can be changed
// temporary info, to be changed by back end to reflect results