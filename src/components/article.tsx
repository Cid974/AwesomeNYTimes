import React from "react";

type ArticleProps = {
  text: string;
  url: string;
};

const Article = ({ text, url }: ArticleProps) => {
  const limit = 30;
  const display = text.substr(0, limit) + "...more";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div>{display}</div>
    </a>
  );
};

export default Article;
