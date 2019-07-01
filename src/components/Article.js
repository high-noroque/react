import React, { Component } from "react";

class Article extends Component {
  toggleOpen = () => {
    this.props.toggleArticle();
  };

  get articleBody() {
    if (!this.props.isOpen) return null;
    return <p>{this.props.article.text}</p>;
  }

  render() {
    const {
      article: { title },
      isOpen
    } = this.props;
    return (
      <div>
        <h3>
          {title}
          <button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
        </h3>
        {this.articleBody}
      </div>
    );
  }
}

export default Article;
