import React, { Component, PureComponent } from "react";
import "./Modal.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="modal1">
        <header className="modal__header">
          <h1>Why you want to become a mentor?</h1>
        </header>
        <section className="modal__content">{this.props.children}</section>
        <section className="modal__actions">
          <button className="btn btn-light" onClick={this.props.onCancel}>
            cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.props.onConfirm}
          >
            send
          </button>
        </section>
      </div>
    );
  }
}

export default Modal;
