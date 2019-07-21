import React, { Component } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "@reach/router";
import firebase from "../Firebase";
import { Router, navigate } from "@reach/router";

class EditMentorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      About: "",
      Experience: "",
      Education: "",
      Skills: "",
      Interests: ""
    };
    this.aboutElRef = React.createRef();
    this.experienceElRef = React.createRef();
    this.educationElRef = React.createRef();
    this.skillsElRef = React.createRef();
    this.interestsElRef = React.createRef();

    this.confirmMentorData = this.confirmMentorData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  confirmMentorData = () => {
    const about = this.aboutElRef.current.value;
    const experience = this.experienceElRef.current.value;
    const education = this.educationElRef.current.value;
    const skills = this.skillsElRef.current.value;
    const interests = this.interestsElRef.current.value;

    const ref = firebase.database().ref(`mentors/${this.props.userID}`);
    ref.update({
      About: about,
      Experience: experience,
      Education: education,
      Skills: skills,
      Interests: interests
    });
    navigate("/mentors");
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
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="card bg-light col-xl-7 col-lg-7 col-md-9 col-sm-9 col-11">
            <form>
              <div className="form-group">
                <label htmlFor="InputAbout1">About you:</label>
                <textarea
                  value={this.state.About}
                  rows="4"
                  className="form-control"
                  id="InputAbout1"
                  placeholder="Put some text which will attract your audience!"
                  ref={this.aboutElRef}
                  name="About"
                  placeholder={this.state.About}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputExperience1">Experience:</label>
                <textarea
                  value={this.state.Experience}
                  rows="4"
                  className="form-control"
                  id="InputExperience1"
                  placeholder="Write a bit of youe experience!"
                  ref={this.experienceElRef}
                  name="Experience"
                  placeholder={this.state.Experience}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputEducation1">Education:</label>
                <textarea
                  value={this.state.Education}
                  rows="4"
                  className="form-control"
                  id="InputEducation1"
                  placeholder="Type what you studdied?"
                  ref={this.educationElRef}
                  name="Education"
                  placeholder={this.state.Education}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputSkills1">Skills:</label>
                <textarea
                  value={this.state.Skills}
                  rows="4"
                  className="form-control"
                  id="InputSkills1"
                  placeholder="Tell me more about your skils?"
                  ref={this.skillsElRef}
                  name="Skills"
                  placeholder={this.state.Skills}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputInterests1">Interests:</label>
                <textarea
                  value={this.state.Interests}
                  rows="4"
                  className="form-control"
                  id="InputInterests1"
                  ref={this.interestsElRef}
                  name="Interests"
                  placeholder={this.state.Interests}
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <div className="row pb-3">
              <div className="col text-left">
                <Link to={"/profile"}>
                  <button className="btn btn-info">
                    <FaArrowLeft />
                  </button>
                </Link>
              </div>
              <div className="col text-right">
                <button
                  className="btn btn-info"
                  id="buttonAdd"
                  onClick={this.confirmMentorData}
                >
                  submit changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMentorProfile;
