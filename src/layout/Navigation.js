import React, { Component } from "react";
import { Link } from "@reach/router";
import ShowProfilePhoto from "../ShowProfilePhoto";
import mentor_logo2 from "../assets/images/mentor_logo.png";
import { FiLogIn, FiLogOut, FiHome, FiUsers } from "react-icons/fi";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { user, logOutUser } = this.props;
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show text-right";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-nav">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="pr-2"
              src={mentor_logo2}
              alt="logo"
              height="45px"
              width="35px"
            />
            <b>Online Mentor</b>
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <Link className="nav-item nav-link" to="/">
              <button onClick={this.toggleNavbar} className="btn btn-light">
                <FiHome /> home
              </button>
            </Link>
            {user && (
              <Link className="nav-item nav-link" to="/mentors">
                <button onClick={this.toggleNavbar} className="btn btn-light">
                  <FiUsers /> mentors
                </button>
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                <button onClick={this.toggleNavbar} className="btn btn-light">
                  <FiLogIn /> log in
                </button>
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                <button onClick={this.toggleNavbar} className="btn btn-light">
                  register
                </button>
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                <button onClick={this.toggleNavbar} className="btn btn-light">
                  <FiLogOut /> log out
                </button>
              </Link>
            )}
            {user && (
              <Link to={"/profile"} className="pl-3 navbar-brand pt-2">
                <div onClick={this.toggleNavbar} className="row pr-3">
                  <div className="col mr-0 pr-1">
                    <ShowProfilePhoto
                      className="mr-1"
                      userID={this.props.userID}
                    />{" "}
                  </div>
                  <div className="col mr-0 p-0 pt-1 text-center">Profile</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;
