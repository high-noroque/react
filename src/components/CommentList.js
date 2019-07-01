import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

class CommentsList extends Component {
  state = {
    isOpen: false
  };

  toggleComments = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  get comments() {
    const { comments } = this.props;
    const commentBody = comments.length ? (
      this.props.comments.map(comment => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    ) : (
      <h3>No comments yet</h3>
    );
    return <div>{commentBody}</div>;
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button onClick={this.toggleComments}>
          {isOpen ? "hide comments" : "show comments"}
        </button>
        {isOpen ? <ol>{this.comments}</ol> : null}
      </div>
    );
  }
}

CommentsList.defaultProps = {
  comments: []
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsList;
