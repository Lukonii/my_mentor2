import React, { Component } from "react";
import { FaOm, FaUserCircle } from "react-icons/fa";
import { Link } from "@reach/router";
import ShowProfilePhoto from "../ShowProfilePhoto";
import mentor_logo from "../assets/images/mentor_logo.png";

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <navbar className="navbar navbar-expand bg-primary navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="pr-2"
              src={mentor_logo}
              alt="logo"
              height="30px"
              width="25px"
            />
            My Mentor
          </Link>
          <div className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                meetings
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                log in
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                register
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                log out
              </Link>
            )}
            {user && (
              <Link to="/profile" className="navbar-brand">
                <ShowProfilePhoto
                  className="pb-4 mr-1"
                  userID={this.props.userID}
                />{" "}
                Profile{" "}
              </Link>
            )}
          </div>
        </div>
      </navbar>
    );
  }
}

export default Navigation;
