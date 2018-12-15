import React from "react";
import axios from "axios";
//User Dashboard Page

export default class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = { info: "Welcome to your Dashboard!",
    }
    this.getMessages = this.getMessages.bind(this);
  }

  //State for previously bought items
  previouslyBought = () => {
    this.setState({ info: "previously-bought" });
  };

  //State for current active selling post from the user
  mySelling = () => {
    this.setState({ info: "My Postings" });
  };

  //State for user profile account information, username, contact info, etc.
  userProfile = () => {
    this.setState({ info: "Messages" });
  };

  getMessages(){

    axios.get("/messages/allMessages").then(response =>{
      if(response === 200){
        console.log(response);
      }
    })
  }

  render() {
    return (
    
      <div className="dash-menu">
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Dashboard Buttons"
        >
          <div className="dash-title">My Dashboard</div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.getMessages}
          >
            Previously Bought
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.mySelling}
          >
            My Postings
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.userProfile}
          >
            Messages
          </button>

          
        </div>

        <h1 className="dashboardDisplay">{this.state.info}</h1>
      </div>
    );
  }
}

// div, className = "dashboardDisplay" is a state that can be changed
// temporary info, to be changed by back end to reflect results