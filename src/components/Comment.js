import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { user, text } = this.props.comment;
    return (
      <div>
        <h2>{user}</h2>
        <p>{text}</p>
      </div>
    );
  }
}

export default Comment;
