import React, { Component } from "react";
import firebase from "./Firebase";
import AvatarPhoto from "./assets/images/avatar3.JPG";

class TakeProfilePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ""
    };
  }
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
      <img
        src={this.state.src}
        alt="Profile"
        height="150"
        width="150"
        style={{ borderRadius: "50%", margin: "auto", paddingTop: "5px" }}
      />
    );
  }
}

export default TakeProfilePhoto;
