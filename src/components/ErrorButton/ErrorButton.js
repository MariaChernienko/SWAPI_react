import React, { Component } from "react";
import "./ErrorButton.css";

export default class ErrorButton extends Component {
  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        type="button"
        className="btn btn-danger error-button"
        onClick={() => this.setState({ renderError: true })}
      >
        Trow Error
      </button>
    );
  }
}
