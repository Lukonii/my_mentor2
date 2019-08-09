import React, { Component } from "react";
import firebase from "./Firebase";
import AvatarPhoto from "./assets/images/avatar3.JPG";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";

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
      message: "",
      image2: "",
      imageURL: "",
      progress: 0
    };
  }
  handleProgress = progress => this.setState({ progress });
  handleUploadStart = () => {
    this.setState({
      progress: 0
    });
  };
  handleUploadError = error => {
    this.setState({ message: "Error while uploading, try again!" });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ progress: 100, message: "Photo changed!" });
    firebase
      .storage()
      .ref(`images/${this.props.userID}/`)
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ src: url }));
    window.location.reload();
  };
  componentDidMount() {
    const ref = firebase
      .storage()
      .ref(`images/${this.props.userID}/profilePhoto.jpg`);

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
        <p>{this.state.message}</p>
        <p>Progress: {this.state.progress}</p>
        <CustomUploadButton
          accept="image/*"
          filename={"profilePhoto.jpg"}
          storageRef={firebase.storage().ref(`images/${this.props.userID}/`)}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          style={{
            backgroundColor: "#f7b733",
            color: "black",
            padding: 10,
            borderRadius: 25 + "px",
            cursor: "pointer",
            boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.35)"
          }}
        >
          select your profile photo
        </CustomUploadButton>
      </div>
    );
  }
}

export default ImageUpload;
