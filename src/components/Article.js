import React, { PureComponent } from "react";

class Article extends PureComponent {
  toggleOpen = () => {
    this.props.toggleArticle(this.props.article.id);
  };

  get articleBody() {
    if (!this.props.isOpen) return null;
    return <p>{this.props.article.text}</p>;
  }

  render() {
    console.log("render Article");
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
