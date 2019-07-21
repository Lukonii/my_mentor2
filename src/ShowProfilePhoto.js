import React, { Component } from "react";
import firebase from "./Firebase";
import AvatarPhoto from "./assets/images/avatarMan.jpg";

class ShowProfilePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ""
    };
  }
  componentDidMount() {
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
      <img
        src={this.state.src}
        alt="Avatar"
        height="40"
        width="40"
        style={{ borderRadius: "50%" }}
      />
    );
  }
}

export default ShowProfilePhoto;
