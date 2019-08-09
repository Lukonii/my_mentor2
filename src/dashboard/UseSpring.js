import React, { Component } from "react";

import TopMentors from "./TopMentors";
import { Spring } from "react-spring/renderprops";

class UseSpring extends Component {
  render() {
    return (
      <Spring
        config={{ delay: 2500 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props1 => (
          <div style={props1}>
            <div className="row d-flex justify-content-center">
              <div className="card text-left" id="top3">
                <div className="card-body">
                  <h1 className="card-title">Top 3 mentors:</h1>
                  <div className="card-text">
                    <TopMentors />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default UseSpring;
