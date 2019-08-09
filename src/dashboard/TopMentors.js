import React, { Component } from "react";
import firebase from "../Firebase";
import MentorsList from "./MentorsList";

class TopMentors extends Component {
  state = {
    mentors: null,
    howManyMentors: 3
  };

  async componentDidMount() {
    let mentorsList = [];
    let init = null;
    let mentorsRef = firebase
      .database()
      .ref("profiles/v5brheTgKlhjmJQrJdPvz2LJPZz2");
    mentorsRef.on("value", snapshot => {
      init = snapshot.val();

      mentorsList.push({
        userID: "v5brheTgKlhjmJQrJdPvz2LJPZz2",
        key: "v5brheTgKlhjmJQrJdPvz2LJPZz2",
        mentor: init
      });
    });
    mentorsRef = firebase
      .database()
      .ref("profiles/LgU7y3yM86hvxxFA1Y4Cv7Wc5EF3");
    mentorsRef.on("value", snapshot => {
      init = snapshot.val();

      mentorsList.push({
        userID: "LgU7y3yM86hvxxFA1Y4Cv7Wc5EF3",
        key: "LgU7y3yM86hvxxFA1Y4Cv7Wc5EF3",
        mentor: init
      });
    });
    mentorsRef = firebase
      .database()
      .ref("profiles/UrreEXIIUMUa7n0QDiqeCw3jC8r1");
    mentorsRef.on("value", snapshot => {
      init = snapshot.val();

      mentorsList.push({
        userID: "UrreEXIIUMUa7n0QDiqeCw3jC8r1",
        key: "UrreEXIIUMUa7n0QDiqeCw3jC8r1",
        mentor: init
      });
      this.setState({
        mentors: mentorsList,
        howManyMentors: mentorsList.length
      });
    });
  }
  render() {
    return (
      <div className="mr-0">
        <MentorsList
          mentors={this.state.mentors}
          howManyMentors={this.state.howManyMentors}
        />
      </div>
    );
  }
}

export default TopMentors;
