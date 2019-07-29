import React, { Component } from "react";
import Modal from "../modal/Modal";
import Backdrop from "../modal/Backdrop";
import firebase from "../Firebase";
import { Alert } from "reactstrap";

class EmailTo extends Component {
  state = {
    creating: false,
    visibleS: false,
    visibleW: false,
    visibleD: false,
    Message: "Why do you want to become a mentor?"
  };

  constructor(props) {
    super(props);
    this.emailElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  starCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    const email = this.emailElRef.current.value;
    const message = this.descriptionElRef.current.value;

    if (email.trim().length === 0 || message.trim().length === 0) {
      this.setState({ creating: false, visibleD: !this.state.visibleD });
      return;
    }
    const ref = firebase.database().ref(`emails/${email}`);
    ref.update({
      Email: email,
      Message: message
    }),
      this.setState({ creating: false, visibleS: !this.state.visibleS });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false, visibleW: !this.state.visibleW });
  };
  toggleS() {
    this.setState({ visibleS: !this.state.visibleS });
  }
  toggleW() {
    this.setState({ visibleW: !this.state.visibleW });
  }
  toggleD() {
    this.setState({ visibleD: !this.state.visibleD });
  }

  render() {
    return (
      <React.Fragment>
        <Alert
          id="idAlert"
          isOpen={this.state.visibleS}
          toggle={this.toggleS.bind(this)}
        >
          Your message to me is sent!
        </Alert>
        <Alert
          color="warning"
          id="idAlert"
          isOpen={this.state.visibleW}
          toggle={this.toggleW.bind(this)}
        >
          Something went wrong!
        </Alert>
        <Alert
          color="danger"
          id="idAlert"
          isOpen={this.state.visibleD}
          toggle={this.toggleD.bind(this)}
        >
          Something is missing!
        </Alert>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            Message={this.state.Message}
          >
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Your email or Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email or Full Name"
                  ref={this.emailElRef}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputDescription1">Description</label>
                <textarea
                  rows="4"
                  className="form-control"
                  id="exampleInputDescription1"
                  placeholder="Enter why I should coose you to become a mentor?"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>
          </Modal>
        )}
        <button
          className="btn btn-light btn-sm btn-block"
          onClick={this.starCreateEventHandler}
        >
          become a mentor
        </button>
      </React.Fragment>
    );
  }
}

export default EmailTo;
