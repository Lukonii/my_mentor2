import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer font-small cyan darken-3">
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
