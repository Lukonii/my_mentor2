import React, { Component } from "react";
import Avatar from "react-avatar-edit";
import avatar from "./assets/images/avatarMan.jpg";
import firebase from "./Firebase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      preview: null,
      image: null,
      name: "",
      url: "",
      src: null
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
    //console.log(this.state.src);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({
        name: e.target.files[0].name,
        src: URL.createObjectURL(e.target.files[0]),
        image: e.target.files[0]
      });
      console.log(`image1: ${image}`);
      console.log(`image2: ${e.target.files[0]}`);
    }
  }
  uploadPhoto = () => {
    console.log(`name: ${this.state.name}`);
    console.log(`src: ${this.state.src}`);
    console.log(`image: ${this.state.image}`);
    const uploadTask = firebase
      .storage()
      .ref(`images/${this.state.name}`)
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
  onClick = () => {
    console.log("radi onClick");
  };

  render() {
    const useStyles = makeStyles(theme => ({
      button: {
        margin: theme.spacing(1)
      },
      input: {
        display: "none"
      }
    }));
    return (
      <div>
        <div>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              component="span"
              className={useStyles.button}
              onClick={this.handleChange}
            >
              Choose
            </Button>
          </label>
          <label>
            <Button
              variant="contained"
              component="span"
              className={useStyles.button}
              onClick={this.uploadPhoto}
            >
              Upload
            </Button>
          </label>
        </div>

        <Avatar
          width={200}
          height={200}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={avatar}
        />
        <br />
        <img src={this.state.src} alt="Avatar" height="100" width="100" />
        <br />

        <div>
          <input
            style={{ display: "none" }}
            accept="image/*"
            className="btn btn-primary btn-sm float-left"
            type="file"
            onChange={this.handleChange}
          />
        </div>

        <div className="text-center">
          <button
            onClick={this.uploadPhoto}
            type="submit"
            className="btn btn-info"
            id="buttonAdd"
          >
            Upload Photo
          </button>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
