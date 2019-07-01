import React, { PureComponent } from "react";
import CommentsList from "./CommentList";

class Article extends PureComponent {
  toggleOpen = () => {
    this.props.toggleArticle(this.props.article.id);
  };

  get articleBody() {
    if (!this.props.isOpen) return null;
    return <p>{this.props.article.text}</p>;
  }

  render() {
    const { article, isOpen } = this.props;
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
        </h3>
        {this.articleBody}
        {isOpen ? <CommentsList comments={article.comments} /> : null}
      </div>
    );
  }
}

export default Article;
