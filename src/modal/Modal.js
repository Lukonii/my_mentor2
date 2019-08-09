import React, { Component } from "react";
import "./Modal.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: props.Message
    };
  }
  render() {
    return (
      <div className="modal1">
        <header className="modal__header">
          <h1>{this.state.Message}</h1>
        </header>
        <section className="modal__content">{this.props.children}</section>
        <section className="modal__actions">
          <button className="btn btn-light" onClick={this.props.onCancel}>
            cancel
          </button>
          <button
            type="submit"
            className="btn btn-info"
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
