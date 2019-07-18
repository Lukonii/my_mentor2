import React, { Component } from "react";
import TakeProfilePhoto from "../TakeProfilePhoto";
import { Link } from "@reach/router";

class MentorsList extends Component {
  constructor(props) {
    super(props);
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
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <Link to={`/profile/${mentors[i].userID}`}>
                  <button className="btn btn-info">View</button>
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
      <div className="container mt-5 d-flex justify-content-center">
        <div className="row">{showMentors}</div>
      </div>
    );
  }
}

export default MentorsList;
