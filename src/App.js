// Import React
import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import firebase from "./Firebase";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./dashboard/Home";
import Dashboard from "./dashboard/Dashboard";
import Welcome from "./dashboard/Welcome";
import Profile from "./dashboard/Profile";
import Navigation from "./layout/Navigation";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Meetings from "./Meetings";
import CheckIn from "./CheckIn";
import Attendees from "./Attendees";
import About from "./About";
import EditProfile from "./EditProfile";
import ImageUpload from "./ImageUpload";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null,
      email: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      let user = firebase.auth().currentUser;
      let email;
      if (user != null) {
        email = user.email;
      }
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid,
          email: email
        });

        const meetingsRef = firebase.database().ref("meetings/" + FBUser.uid);

        meetingsRef.on("value", snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];

          for (let item in meetings) {
            meetingsList.push({
              meetingID: item,
              meetingName: meetings[item].meetingName
            });
          }

          this.setState({
            meetings: meetingsList,
            howManyMeetings: meetingsList.length
          });
        });
      } else {
        this.setState({ user: null });
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate("/meetings");
      });
    });
  };

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };

  addMeeting = meetingName => {
    const ref = firebase.database().ref(`meetings/${this.state.user.uid}`);
    ref.push({ meetingName: meetingName });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <Navigation
          user={this.state.user}
          userID={this.state.userID}
          logOutUser={this.logOutUser}
        />
        {this.state.user && (
          <Welcome
            userName={this.state.displayName}
            logOutUser={this.logOutUser}
          />
        )}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Dashboard path="/dashboard" profileName={this.state.userID} />
          <Meetings
            path="/meetings"
            meetings={this.state.meetings}
            addMeeting={this.addMeeting}
            userID={this.state.userID}
          />
          <Attendees
            path="/attendees/:userID/:meetingID"
            adminUser={this.state.userID}
          />
          <CheckIn path="/checkin/:userID/:meetingID" />
          <Register path="/register" registerUser={this.registerUser} />
          <About path="/about" />
          <Profile
            path="/profile"
            profileInfo={this.state.displayName}
            userID={this.state.userID}
            profileEmail={this.state.email}
          />
          <EditProfile path="/editprofile" />
        </Router>
      </div>
    );
  }
}

export default App;
