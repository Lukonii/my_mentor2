import React, { Component } from "react";
import Profile from "./Profile";
import firebase from "../Firebase";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      url: null
    };

    this.showPhoto = this.showPhoto.bind(this);
  }
  showPhoto() {
    /*const ref = firebase
      .database()
      .ref(
        `profiles/jZe8jz1NR5QDXgz6PmglMKTsQly1/-Lj8E6xs5QemKss5RDRw/ProfilePhoto`
      );

    ref.on("value", snapshot => {
      this.setState({ url: snapshot.val() });
    });*/
    //console.log(this.state.url);
    const ref = firebase
      .storage()
      .ref("images")
      .child("imeSlike")
      .getDownloadURL()
      .than(url => {
        console.log(url);
      });
  }
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <img src="" alt="slika iz baze" />
            <button onClick={this.showPhoto}>Show photo</button>
          </div>
          <div className="col s12 m5 offset-m1">
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
