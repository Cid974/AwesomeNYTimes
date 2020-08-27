import React, { useContext } from "react";
import axios from "axios";
// import List from "@material-ui/core/List";
import { ArticleContext } from "../store/articleContext";
import Article from "./article";
import { ListItem, Button } from "@material-ui/core";
import "../style/ArticlesList.css";
import { pageCall, apiKey, formatArticle } from "../utils/constants";
import { FixedSizeList, ListChildComponentProps } from "react-window";

const ArticlesList = () => {
  const data = useContext(ArticleContext);
  const { state, dispatch } = data;

  const getNewArticles = async () => {
    const page = state.offset === 0 ? 1 : state.offset / 10 + 1;
    const result = await axios(
      pageCall(state.keyword, apiKey, page.toString())
    );

    const response = result.data.response;
    const offset = response.meta.offset;
    const articles = formatArticle(response.docs);
    console.log(response);
    dispatch({ type: "ADD_ARTICLES", payload: { offset, articles } });
  };

  const handleNewPage = () => {
    dispatch({ type: "LOAD", payload: true });
    getNewArticles();
  };

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    const top = style.top! as number;

    const padding = `${top + 10}px`;

    return (
      <ListItem style={{ ...style, top: padding }} key={index}>
        <Article
          text={state.articles[index].lead}
          url={state.articles[index].url}
        />
      </ListItem>
    );
  };

  return (
    <div className="ArticlesList">
      {state.articles.length === 1 ? (
        <span>No articles searched for yet!</span>
      ) : (
        <div className="ListContainer">
          <FixedSizeList
            height={400}
            width="100%"
            itemSize={35}
            itemCount={state.articles.length}
          >
            {renderRow}
          </FixedSizeList>
          {/* <List className="ArticlesList_Filled">
            {state.articles.map((item) => {
              return (
                <ListItem key={item.id}>
                  <Article text={item.abstract} url={item.url} />
                </ListItem>
              );
            })}
          </List> */}
          {state.articles.length <= state.hits ? (
            <div className="LoadButton">
              <Button variant="contained" onClick={() => handleNewPage()}>
                Load More
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
