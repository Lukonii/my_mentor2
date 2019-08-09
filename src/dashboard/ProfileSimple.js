import React, { Component } from "react";
import firebase from "../Firebase";
import TakeProfilePhoto from "../TakeProfilePhoto";

class ProfileSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Surname: "",
      Email: props.profileEmail,
      Skype: "",
      Location: "",
      Language: "",
      Mentor: false
    };
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  componentDidMount() {
    //ovde cemo da pokupimo podatke o useru i da update state
    const ref = firebase.database().ref(`profiles/${this.props.userID}`);

    ref.on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({
          Name: snapshot.val().Name,
          Surname: snapshot.val().Surname,
          Skype: snapshot.val().Skype,
          Location: snapshot.val().Location,
          Language: snapshot.val().Language,
          Mentor: snapshot.val().Mentor,
          Email: snapshot.val().Email
        });
      }
    });
  }
  render() {
    return (
      <div className="card bg-light mt-3">
        <div className="card-header">
          <h3 className="font-weight-light">Mentor's profile:</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <TakeProfilePhoto userID={this.props.userID} />
            </div>
          </div>
          <hr />
          <br />
          <h5>Profile Data:</h5>
          <div>
            <p>Name: {this.state.Name}</p>
            <hr />
            <p>Surname: {this.state.Surname}</p>
            <hr />
            <p>Email: {this.state.Email}</p>
            <hr />
            <p>Skype: {this.state.Skype}</p>
            <hr />
            <p>Location: {this.state.Location}</p>
            <hr />
            <p>Language: {this.state.Language}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSimple;
