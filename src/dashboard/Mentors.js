import React, { Component } from "react";
import firebase from "../Firebase";
import mentorsList from "./MentorsList";
import MentorsList from "./MentorsList";

class Mentors extends Component {
  state = {
    mentors: null,
    howManyMentors: 0
  };

  componentDidMount() {
    let mentorsList = [];
    let i = 0;
    const mentorsRef = firebase.database().ref("profiles");
    mentorsRef.on("value", snapshot => {
      snapshot.forEach(data => {
        let mentors = data.val();

        let keys = Object.keys(snapshot.val());
        let k = keys[i];
        let userID = k;
        keys = Object.keys(mentors);
        k = keys[0];
        let init = mentors[k];

        mentorsList.push({
          userID: userID,
          key: k,
          mentor: init
        });
        i = i + 1;
      }),
        this.setState({
          mentors: mentorsList,
          howManyMentors: mentorsList.length
        });
    }),
      console.log(mentorsList);
  }
  render() {
    return (
      <MentorsList
        mentors={this.state.mentors}
        howManyMentors={this.state.howManyMentors}
      />
    );
  }
}

export default Mentors;
