import React, { Component } from "react";

class UserForm extends Component {
  state = {
    userInput: ""
  };

  handleInputChange = event => {
    event.preventDefault();

    if (event.target.value.length > 10) {
      return this.setState({ userInput: "" });
    }

    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <div>
        Username:
        <input value={this.state.userInput} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default UserForm;
