import React, { useContext } from "react";
import axios from "axios";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { ListItem, Button, CircularProgress } from "@material-ui/core";

import { ArticleContext, IArticle } from "../store/articleContext";
import Details from "../pages/Details";
import { pageCall, apiKey } from "../utils/constants";
import { formatArticle } from "../utils/format";

import "../style/ArticlesList.css";
import "../style/Loader.css";

type ArticleListProps = {
  articles: Array<IArticle>;
};

const ArticlesList = (props: ArticleListProps) => {
  const data = useContext(ArticleContext);
  const { state, dispatch } = data;
  const { articles } = props;

  const getNewArticles = async () => {
    const page = state.offset === 0 ? 1 : state.offset / 10 + 1;
    const result = await axios(
      pageCall(state.keyword, apiKey, page.toString())
    );

    const response = result.data.response;
    const offset = response.meta.offset;
    const articles = formatArticle(response.docs);
    dispatch({ type: "ADD_ARTICLES", payload: { offset, articles } });
  };

  const handleNewPage = () => {
    dispatch({ type: "LOAD", payload: true });
    getNewArticles();
  };

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;
    const match = useRouteMatch();

    const top = style.top! as number;

    const padding = `${top + 10}px`;

    return (
      <ListItem style={{ ...style, top: padding }} key={index}>
        <div>
          <Link
            to={`${match.path}${state.articles[index].id}`}
            className="Link"
          >
            {state.articles[index].headline}
          </Link>
        </div>

        <Route path={`${match.path}/:articleId`} component={Details} />
      </ListItem>
    );
  };

  return (
    <div className="ArticlesList">
      {articles.length < 1 ? (
        <span>No articles searched for yet!</span>
      ) : (
        <div className="ListContainer">
          <FixedSizeList
            height={400}
            width="100%"
            itemSize={50}
            itemCount={articles.length}
          >
            {renderRow}
          </FixedSizeList>
          {articles.length <= state.hits ? (
            <div className="LoadButton">
              <Button
                variant="contained"
                onClick={() => handleNewPage()}
                disabled={state.loading}
              >
                {state.loading && <CircularProgress size={20} />}
                {!state.loading && "Load More"}
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
