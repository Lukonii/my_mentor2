import React, { Component } from "react";
import firebase from "../Firebase";
import { Router, navigate } from "@reach/router";
import ImageUpload from "../ImageUpload";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "@reach/router";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfilePhoto: "",
      Name: props.profileInfo,
      Surname: "",
      Email: props.profileEmail,
      Skype: "",
      Location: "",
      Language: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextSubmit = this.nextSubmit.bind(this);
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
    ref
      .update({
        Name: name,
        Surname: this.state.Surname,
        Email: email,
        Skype: this.state.Skype,
        Location: this.state.Location,
        Language: language
      })
      .then(
        this.setState({
          message: "Your changes has been saved!"
        })
      );
    //window.location.reload();
  }
  nextSubmit(e) {
    e.preventDefault();
    navigate("/");
    window.location.reload();
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
          <p className="ml-2">{this.state.message}</p>
          <p className="ml-2">
            * Fill in your data fields or modify existing ones.
          </p>
        </form>
        <div className="mb-3 pt-3 d-flex justify-content-center">
          <ImageUpload userID={this.props.userID} />
        </div>
        <div className="row pb-3">
          <div className="col text-left">
            <Link to={`/profile/${this.props.userID}`}>
              <button className="btn btn-info">
                <FaArrowLeft />
              </button>
            </Link>
          </div>
          <div className="col text-right">
            <button
              className="btn btn-info"
              id="buttonAdd"
              onClick={this.nextSubmit}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
