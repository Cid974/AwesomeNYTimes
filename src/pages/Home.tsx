import React, { useContext } from "react";
import { CircularProgress } from "@material-ui/core";

import { ArticleContext } from "../store/articleContext";
import Search from "../components/search";
import ArticlesList from "../components/articlesList";

import "../style/Home.css";
import "../style/Loader.css";

const Home = () => {
  const data = useContext(ArticleContext);
  const { state } = data;

  return (
    <div className="Home">
      <Search />
      {state.loading && state.articles.length === 1 ? (
        <div className="Loader">
          <CircularProgress />
        </div>
      ) : (
        <ArticlesList />
      )}
    </div>
  );
};

export default Home;
