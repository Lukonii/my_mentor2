import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + "em",
      fontWeight: 200
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-5 mb-5 mb-2"
              style={{
                fontSize: 2.8 + "em"
              }}
            >
              <h1>satisfied in your communication?</h1>
            </div>
            <h2 className="font-weight-light ">
              THIS MIGHT BE THE MOST IMPORTANT SITE OF YOUR LIFE...
            </h2>
            <br />
            <h4 className="font-weight-light text-left">Dear Friend.</h4>
            <p className="lead text-left" style={biggerLead}>
              With years of working with people we have been realised that ...
              More and more people in this world have problem with
              comunnication. And with all socialmedia stuff, instead of people
              becomming more conecter, they become more and more intothem self
              Ako sebe pronalazis u ovo grupi ljudi. onda si na mestu kojece ti
              sigurno promeniti zivot, to ti obeacavam.
            </p>

            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2">
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Meetings
              </Link>
            )}
          </div>{" "}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
