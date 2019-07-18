import React, { Component } from "react";
import { Link } from "@reach/router";
import ShowProfilePhoto from "../ShowProfilePhoto";
import mentor_logo from "../assets/images/mentor_logo.png";
import { FiLogIn, FiLogOut } from "react-icons/fi";

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="navbar navbar-expand bg-primary navbar-dark ">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="pr-2"
              src={mentor_logo}
              alt="logo"
              height="45px"
              width="35px"
            />
            My Mentor
          </Link>
          <div className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link" to="/mentors">
                <button className="btn btn-light">mentors</button>
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                <button className="btn btn-info">
                  <FiLogIn /> log in
                </button>
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                <button className="btn btn-light">register</button>
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                <button className="btn btn-info">
                  <FiLogOut /> log out
                </button>
              </Link>
            )}
            {user && (
              <Link
                to={`/profile/${this.props.userID}`}
                className="pl-3 navbar-brand pt-2"
              >
                <ShowProfilePhoto className="mr-1" userID={this.props.userID} />{" "}
                Profile{" "}
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
