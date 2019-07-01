import React from "react";
import ArticleList from "./components/ArticleList";
import UserForm from "./components/user-form";

const App = props => {
  return (
    <div className="App">
      <UserForm />
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default App;
