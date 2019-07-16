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
      src: ""
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
        image: e.target.files[0]
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
      <div>
        <span>Profile Photo:</span>
        <br />
        <img src={this.state.src} alt="Avatar" height="100" width="100" />
        <br />
        <div className="text-center">
          <input
            accept="image/*"
            className=""
            type="file"
            onChange={this.handleChange}
          />
          <Link to="/">
            <button
              onClick={this.uploadPhoto}
              type="submit"
              className="btn btn-info"
              id="buttonAdd"
            >
              Upload Photo
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
