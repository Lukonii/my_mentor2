import React, { Component } from "react";
import ProfileSimple from "./ProfileSimple";
import firebase from "../Firebase";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "@reach/router";

class MentorProfile extends Component {
  constructor(props) {
    super(props);
    //console.log(props.userID);
  }
  state = {
    About: "",
    Experience: "",
    Education: "",
    Skills: "",
    Interests: ""
  };
  componentDidMount() {
    const ref = firebase.database().ref(`mentors/${this.props.userID}`);
    ref.on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({
          About: snapshot.val().About,
          Experience: snapshot.val().Experience,
          Education: snapshot.val().Education,
          Skills: snapshot.val().Skills,
          Interests: snapshot.val().Interests
        });
      }
    });
  }
  render() {
    return (
      <div className="container pb-3">
        <div className="row m-0 p-0">
          <div className="col-11 col-sm-11 col-md-4 col-lg-4 col-xl-4">
            <ProfileSimple userID={this.props.userID} />
          </div>
          <div className="mt-3 col-11 col-sm-11 col-md-8 col-lg-8 col-lx-8">
            <div className="card bg-light">
              <div className="card-header">About:</div>
              <div className="card-body">
                <div>
                  <p>About:</p>
                  <textarea disabled rows="4" placeholder={this.state.About} />
                  <hr />
                  <p>Experience</p>
                  <textarea
                    disabled
                    rows="4"
                    placeholder={this.state.Experience}
                  />
                  <hr />
                  <p>Education:</p>
                  <textarea
                    disabled
                    rows="4"
                    placeholder={this.state.Education}
                  />
                  <hr />
                  <p>Skills:</p>
                  <textarea disabled rows="4" placeholder={this.state.Skills} />
                  <hr />
                  <p>Interests:</p>
                  <textarea
                    disabled
                    rows="4"
                    placeholder={this.state.Interests}
                  />
                </div>
              </div>
              <div className="pb-3 col text-left">
                <Link to="/mentors">
                  <button className="btn btn-info">
                    <FaArrowLeft />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MentorProfile;
