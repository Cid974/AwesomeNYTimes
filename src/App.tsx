import React, { useReducer } from "react";
import "./style/App.css";
import Search from "./components/search";
import ArticlesList from "./components/articlesList";
import {
  ArticleContext,
  articleReducer,
  initialState,
} from "./store/articleContext";
import { CircularProgress } from "@material-ui/core";

function App() {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <div className="App">
      <ArticleContext.Provider value={{ state, dispatch }}>
        <Search />
        {state.loading && state.articles.length === 1 ? (
          <div className="App_Loader">
            <CircularProgress />
          </div>
        ) : (
          <ArticlesList />
        )}
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
