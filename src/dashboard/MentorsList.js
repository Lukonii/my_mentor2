import React, { Component } from "react";
import TakeProfilePhoto from "../TakeProfilePhoto";
import { Link } from "@reach/router";
import firebase from "../Firebase";

class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      About: ""
    };
  }

  render() {
    const mentors = this.props.mentors;

    let showMentors = [];
    let listCards = [];
    if (mentors !== null) {
      for (let i = 0; i < mentors.length; i++) {
        //console.log(mentors[i]);
        let mentor = mentors[i].mentor;
        showMentors.push(
          <div className="col mb-2 col-xs-4" id="card" key={mentors[i].key}>
            <div className="card text-center">
              <TakeProfilePhoto userID={mentors[i].userID} />
              <div className="card-body">
                <h2 className="card-title">{mentor.Name}</h2>
                <div className="card-text">
                  <span>
                    Email: <span className="text-primary">{mentor.Email}</span>
                  </span>
                  <br />
                  <span>
                    Skype:{" "}
                    <span>
                      <b>{mentor.Skype}</b>
                    </span>
                  </span>
                  <p>{this.state.About}</p>
                </div>
                <Link to={`/mentor/${mentors[i].userID}`}>
                  <button className="btn btn-info">view</button>
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last seen 1 day ago</small>
              </div>
            </div>
          </div>
        );
      }
    } else {
      showMentors = <div />;
    }
    return (
      <div className="container mt-3 d-flex justify-content-center">
        <div className="row">{showMentors}</div>
      </div>
    );
  }
}

export default MentorsList;
