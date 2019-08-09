import React, { Component } from "react";
import TakeProfilePhoto from "../TakeProfilePhoto";
import { Link } from "@reach/router";
import StarRatings from "react-star-ratings";

class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      About: ""
    };
  }
  changeRating(newRating, name) {
    /*this.setState({
      rating: newRating
    });*/
    let min = 3;
    let max = 5;
    let rand = min + Math.random() * (max - min);
    Number.parseInt(rand, 1);
    this.setState({
      Rating: rand
    });
  }
  render() {
    const mentors = this.props.mentors;
    let showMentors = [];
    let rand = [1, 0, 1, 2, 0, 1, 0, 1, 2, 1, 1];
    if (mentors !== null) {
      for (let i = 0; i < mentors.length; i++) {
        /*let min = 1;
        let max = 3;
        let rand = min + Math.random() * (max - min);
        rand = Number.parseInt(rand, 10);*/
        //console.log(mentors[i]);
        let mentor = mentors[i].mentor;
        showMentors.push(
          <div
            className="col-12 mb-2 col-sm-12 col-md-6 col-lg-4 col-xl-4"
            id="card"
            key={mentors[i].key}
          >
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
                </div>
                <div className="col pb-1">
                  <StarRatings
                    rating={mentor.Stars}
                    starRatedColor="#00b4db"
                    //changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="30px"
                    starSpacing="5px"
                  />
                </div>
                <Link to={`/mentor/${mentors[i].userID}`}>
                  <button className="btn btn-info">view</button>
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {(rand[i] && `Last seen ${rand[i]} day ago`) || (
                    <div>
                      <div className="dot" /> Online
                    </div>
                  )}
                </small>
              </div>
            </div>
          </div>
        );
      }
    } else {
      showMentors = <div />;
    }
    return (
      <div className="mt-2 row d-flex justify-content-center mr-0">
        {showMentors}
      </div>
    );
  }
}

export default MentorsList;
