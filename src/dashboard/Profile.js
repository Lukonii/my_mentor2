import React, { Component } from "react";
import firebase from "../Firebase";
import { Link } from "@reach/router";
import TakeProfilePhoto from "../TakeProfilePhoto";
import { FiEdit3 } from "react-icons/fi";
import EmailTo from "./EmailTo";

class Profile extends Component {
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
      <div>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-10 col-sm-10">
              <div className="card bg-light">
                <div className="card-header">
                  <h3 className="font-weight-light">Your profile:</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 col-lg-9 col-mg-8 col-sm-8">
                      <TakeProfilePhoto userID={this.props.userID} />
                    </div>
                    <div className="text-left col-4 col-lg-3 col-mg-4 col-sm-4">
                      <Link to="/editprofile">
                        <button className="btn btn-info btn-sm btn-block">
                          <FiEdit3 /> edit profile
                        </button>
                      </Link>
                      <br />
                      {!this.state.Mentor && <EmailTo />}
                      {this.state.Mentor && (
                        <Link to="/editmentorprofile">
                          <button className="btn btn-white btn-sm btn-block">
                            mentor's dashboard
                          </button>
                        </Link>
                      )}
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
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
