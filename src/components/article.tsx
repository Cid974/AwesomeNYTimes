import React from "react";

type ArticleProps = {
  text: string;
  url: string;
};

const Article = ({ text, url }: ArticleProps) => {
  let display = "";
  const limit = 30;

  if (text.length > 1) {
    display = text.length <= limit ? text : text.substr(0, limit) + " ...more";
  } else {
    display = "No Text preview available.";
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div>{display}</div>
    </a>
  );
};

export default Article;
