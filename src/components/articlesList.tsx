import React, { useContext } from "react";
import List from "@material-ui/core/List";
import { ArticleContext } from "../store/articleContext";
import Article from "./article";
import { ListItem } from "@material-ui/core";
import "../style/ArticlesList.css";

const ArticlesList = () => {
  const data = useContext(ArticleContext);

  return (
    <div className="ArticlesList">
      {data.state.articles.length === 1 ? (
        <span>No articles searched for yet!</span>
      ) : (
        <List className="ArticlesList_Filled">
          {data.state.articles.map((item) => {
            return (
              <ListItem key={item.id}>
                <Article text={item.abstract} url={item.url} />
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default ArticlesList;
