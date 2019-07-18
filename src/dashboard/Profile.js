import React, { Component } from "react";
import firebase from "../Firebase";
import { Router, navigate } from "@reach/router";
import ImageUpload from "../ImageUpload";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfilePhoto: "",
      Name: props.profileInfo,
      Surname: "",
      Email: "",
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
    if (!email) {
      email = this.props.profileEmail;
    }

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
      <div className="container mt-4 card text-white bg-primary mb-3 w-50">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="input-group input-group-lg  p-3">
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Name:
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="Name"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={this.state.Name}
                value={this.state.Name}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Surname:
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="Surname"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="put surname here"
                value={this.state.Surname}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Email:
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="Email"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={this.props.profileEmail}
                value={this.state.Email}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Skype:
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="Skype"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="put skype name here"
                value={this.state.Skype}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Country:
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="Location"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="put country here"
                value={this.state.Location}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Language:
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="Language"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="put languages you know here"
                value={this.state.Language}
                onChange={this.handleChange}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-info" id="buttonAdd">
                Submit Changes
              </button>
            </div>
          </div>

          <p className="ml-2">
            * Fill in your data fields or modify existing ones.
          </p>
        </form>
        <div className="mb-3 pt-3 d-flex justify-content-center">
          <ImageUpload userID={this.props.userID} />
        </div>
      </div>
    );
  }
}

export default Profile;
