import React, { Component } from "react";
import firebase from "./Firebase";
import AvatarPhoto from "./assets/images/avatarMan.jpg";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      preview: null,
      image: null,
      name: "",
      url: "",
      src: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    if (e.target.files[0]) {
      this.setState({
        name: e.target.files[0].name,
        src: URL.createObjectURL(e.target.files[0]),
        image: e.target.files[0],
        message: "Now upload photo!"
      });
    }
  }
  uploadPhoto = () => {
    const uploadTask = firebase
      .storage()
      .ref(`images/${this.props.userID}/profilePhoto`)
      .put(this.state.image);

    //ako ovde stavim state uzece sadasnju vrednost
    //ako stavim props uzece uzera koji je logovan tako je namesteno
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {}
    );

    window.location.reload();
  };
  componentDidMount() {
    console.log(
      `Nece raditi user id ako se direktno ode tu: ${this.props.userID}`
    );
    const ref = firebase
      .storage()
      .ref(`images/${this.props.userID}/profilePhoto`);

    ref
      .getDownloadURL()
      .then(url => {
        //console.log("Evo link");
        this.setState({
          src: url
        });
      })
      .catch(e => {
        console.log(e.message);
        this.setState({ src: AvatarPhoto });
      });
  }

  render() {
    return (
      <div className="col-10 col-sm-10 col-md-10 col-lg-10">
        <span>
          <h5>Profile Photo:</h5>
        </span>
        <img src={this.state.src} alt="Avatar" height="200" width="200" />
        <p className="ml-2">{this.state.message}</p>
        <div className="row">
          <div className="col text-right">
            <div className="input-group">
              <div className="custom-file ">
                <input
                  accept="image/*"
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  onChange={this.handleChange}
                />
                <label
                  className="text-center"
                  style={{
                    backgroundColor: "#555555",
                    color: "white",
                    margin: 2,
                    padding: 6,
                    borderRadius: 0,
                    pointer: "pointer",
                    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)"
                  }}
                  htmlFor="inputGroupFile01"
                >
                  Select your photo
                </label>
                <button
                  onClick={this.uploadPhoto}
                  type="submit"
                  className="btn btn-sm btn-info"
                  id="buttonAdd"
                >
                  Upload Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
