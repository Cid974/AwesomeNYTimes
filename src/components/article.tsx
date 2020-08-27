import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

import "../style/Article.css";

type ArticleProps = {
  headline: string;
  img: string;
  lead: string;
  url: string;
};

const Article = (props: ArticleProps) => {
  const limit = 30;
  let display;

  if (props.lead.length > 1) {
    display =
      props.lead.length <= limit ? (
        <span>{props.lead}</span>
      ) : (
        <span>
          {props.lead.substr(0, limit)}
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            ...more
          </a>
        </span>
      );
  } else {
    display = <span>No Text preview available.</span>;
  }

  return (
    <div className="Article">
      <Card className="Card">
        <CardHeader title={props?.headline} />
        {props?.img === "empty" ? (
          <ImageIcon fontSize="large" />
        ) : (
          <img src={props?.img} />
        )}
        <CardContent>{display}</CardContent>
      </Card>
    </div>
  );
};

export default Article;
