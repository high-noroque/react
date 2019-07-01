import React, { Component } from "react";
import Article from "./Article";
import accordion from "../decorators/accordion";

class ArticleList extends Component {
  get articles() {
    const { openItemId, toggleOpenArticle, articles } = this.props;
    return articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleArticle={toggleOpenArticle}
        />
      </li>
    ));
  }

  toggleOpenArticle = id => {
    this.setState({
      openArticleId: id
    });
  };

  render() {
    return <ul>{this.articles}</ul>;
  }
}

export default accordion(ArticleList);
