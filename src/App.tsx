import React, { useReducer } from "react";
import "./App.css";
import Search from "./components/search";
import ArticlesList from "./components/articles";
import {
  ArticleContext,
  articleReducer,
  initialState,
} from "./store/articleContext";

function App() {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <div className="App">
      <ArticleContext.Provider value={{ state, dispatch }}>
        <Search />
        <ArticlesList />
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
