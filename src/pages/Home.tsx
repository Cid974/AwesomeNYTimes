import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
      <div>
        <p className="Description">
          Here you can browse the New York Times&apos; list of article by
          keyword.
          <br />
          Type in a keyword, or select one from the suggestion.
          <br />
          You can then click on the result link to check out the articles, or go
          to your <Link to="/bookmarks">Bookmarks.</Link>
        </p>
      </div>
      <Search />
      {state.loading && state.articles.length < 1 ? (
        <div className="Loader">
          <CircularProgress />
        </div>
      ) : (
        <ArticlesList articles={state.articles} />
      )}
    </div>
  );
};

export default Home;
