import React, { Component } from "react";
import Article from "./Article";

class ArticleList extends Component {
  state = {
    openArticleId: null
  };

  get articles() {
    return this.props.articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.state.openArticleId}
          toggleArticle={this.toggleOpenArticle}
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

export default ArticleList;
