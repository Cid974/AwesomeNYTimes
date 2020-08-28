import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  CardActions,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "../style/Article.css";
import { IArticle, ArticleContext } from "../store/articleContext";

type ArticleProps = {
  article: IArticle;
  source: string;
};

const Article = (props: ArticleProps) => {
  const data = useContext(ArticleContext);
  const { state, dispatch } = data;
  const { id, lead, headline, url, img, marked } = props.article;
  const limit = 30;
  let display;

  if (lead.length > 1) {
    display =
      lead.length <= limit ? (
        <span>{lead}</span>
      ) : (
        <span>
          {lead.substr(0, limit)}
          <a href={url} target="_blank" rel="noopener noreferrer">
            ...more
          </a>
        </span>
      );
  } else {
    display = <span>No Text preview available.</span>;
  }

  const handleBookmark = () => {
    const stateArticle = [...state.articles];

    const index = stateArticle.findIndex(
      (article: IArticle) => article.id === id
    );

    stateArticle[index].marked = !stateArticle[index].marked;

    const bookmark = {
      id,
      headline,
      lead,
      url,
      img,
      marked: true,
    };

    if (marked) {
      const newMark = state.articles.filter(
        (article: IArticle) => article.id !== id
      );

      dispatch({
        type: "MARK",
        payload: { articles: stateArticle, bookmark: newMark },
      });
    } else {
      const newMark =
        state.bookmarks.length < 1
          ? [bookmark]
          : [...state.bookmarks, bookmark];

      dispatch({
        type: "MARK",
        payload: { articles: stateArticle, bookmark: newMark },
      });
    }
  };

  return (
    <div className="Article">
      <Card className="Card">
        <CardHeader title={headline} />
        {img === "empty" ? <ImageIcon fontSize="large" /> : <img src={img} />}
        <CardContent>{display}</CardContent>
        {props.source === "List" ? (
          <CardActions>
            <IconButton onClick={() => handleBookmark()}>
              {marked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardActions>
        ) : null}
      </Card>
    </div>
  );
};

export default Article;
