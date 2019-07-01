import React from "react";
import ArticleList from "./components/ArticleList";

const App = props => {
  return (
    <div className="App">
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default App;
