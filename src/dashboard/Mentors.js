import React, { Component } from "react";
import firebase from "../Firebase";
import MentorsList from "./MentorsList";

class Mentors extends Component {
  state = {
    mentors: null,
    howManyMentors: 0
  };

  async componentDidMount() {
    let mentorsList = [];
    let i = 0;
    const mentorsRef = await firebase.database().ref("profiles");
    mentorsRef.on(
      "value",
      snapshot => (
        snapshot.forEach(data => {
          // mentors - podaci iz baze za mentora bez id
          let mentors = data.val();
          if (mentors["Mentor"]) {
            // lista idjeva
            let keys = Object.keys(snapshot.val());
            // specifican id usera za vrednost key[i]
            let userID = keys[i];
            // init ce da ima vrednost objekta mentor
            let init = mentors;
            mentorsList.push({
              userID: userID,
              key: userID,
              mentor: init
            });
          }
          i = i + 1;
        }),
        this.setState({
          mentors: mentorsList,
          howManyMentors: mentorsList.length
        })
      )
    );
  }
  render() {
    return (
      <div className="container">
        <MentorsList
          mentors={this.state.mentors}
          howManyMentors={this.state.howManyMentors}
        />
      </div>
    );
  }
}

export default Mentors;
