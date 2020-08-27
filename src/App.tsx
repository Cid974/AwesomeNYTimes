import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  ArticleContext,
  articleReducer,
  initialState,
} from "./store/articleContext";
import Home from "./pages/Home";
import Details from "./pages/Details";

import "./style/App.css";

function App() {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <div className="App">
      <h2 className={"Title"}>Awesome New York Times</h2>
      <ArticleContext.Provider value={{ state, dispatch }}>
        <Router>
          <Switch>
            <Route path={"/:articleId"}>
              <Details />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
