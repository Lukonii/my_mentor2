import React, { Component } from "react";
import firebase from "../Firebase";
import { Router, navigate, Link } from "@reach/router";
import ImageUpload from "../ImageUpload";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfilePhoto: "",
      Name: props.profileInfo,
      Surname: "",
      Email: props.profileEmail,
      Skype: "",
      Location: "",
      Language: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    //hire I will put my data to database
    // name je vrednost state.Name ali se sa svakom promenom
    // handleChange menja state.Name
    //i ako je name==="" onda ce da stavmi props inace
    // ce da bude state.Name vrednost za name
    let name = this.state.Name;
    let language = this.state.Language;
    let email = this.state.Email;
    if (!name) {
      name = this.props.profileInfo;
    } else {
      // na drugi nacin se menja ime u bazi
      firebase.auth().onAuthStateChanged(FBUser => {
        FBUser.updateProfile({
          displayName: name
        });
      });
    }
    if (!language) {
      language = "English";
    }
    //mejl necemo da menjamo!
    //email is not changed on any site

    const ref = firebase.database().ref(`profiles/${this.props.userID}`);

    //ako ovde stavim state uzece sadasnju vrednost
    //ako stavim props uzece uzera koji je logovan tako je namesteno
    ref.update({
      Name: name,
      Surname: this.state.Surname,
      Email: email,
      Skype: this.state.Skype,
      Location: this.state.Location,
      Language: language
    });
  }

  render() {
    return (
      <div>
        Profile!
        <Link to="/editprofile" className="navbar-brand">
          <button className="btn btn-info">Edit</button>
        </Link>
      </div>
    );
  }
}

export default Profile;
