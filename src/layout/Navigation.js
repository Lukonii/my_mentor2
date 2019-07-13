import React, { Component } from "react";
import { FaOm, FaUserCircle } from "react-icons/fa";
import { Link } from "@reach/router";
import ShowProfilePhoto from "../ShowProfilePhoto";

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <FaOm className="pb-1 mr-1" /> My Mentor
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
      </nav>
    );
  }
}

export default Navigation;
