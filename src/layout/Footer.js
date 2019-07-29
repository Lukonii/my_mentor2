import React, { Component } from "react";

class footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small cyan darken-3">
        <div className="ml-0 mr-0">
          <div className="row ml-0 mr-0">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12 pt-3 text-center">
              <div>
                <a
                  id="linkic"
                  className="fb-ic"
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-1 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  id="linkic"
                  className="tw-ic"
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-lg white-text mr-1 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  id="linkic"
                  className="li-ic"
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text mr-1 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  id="linkic"
                  className="ins-ic"
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-1 fa-2x">
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="row footer-copyright text-center py-3 ml-0 mr-0">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12">
              <span>
                <i id="linkic" className="fas fa-envelope mr-1" />
                Contact:
                <b>
                  <i>luka.vulovic29@gmail.com</i>
                </b>
              </span>
            </div>

            <div
              id="linkic"
              className="col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12"
            >
              Version: 1.0.0
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12">
              © 2019 Copyright:{" "}
              <b>
                <i>getonlinementor.com</i>
              </b>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
