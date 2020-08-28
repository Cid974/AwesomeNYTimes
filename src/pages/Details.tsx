import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ArticleContext } from "../store/articleContext";
import Article from "../components/article";
import Back from "../components/backButton";

import "../style/Details.css";

type DetailsProps = {
  source: string;
};

interface ParamType {
  articleId: string;
}

const Details = (props: DetailsProps) => {
  const { articleId } = useParams<ParamType>();
  const data = useContext(ArticleContext);
  const { state } = data;

  const article = state.articles.find((item) => item.id === articleId);

  if (article !== undefined) {
    return (
      <div className="Details">
        <Article article={article} source={props.source} />
        <Back />
      </div>
    );
  } else {
    return (
      <div className="Details">
        <h2>That article doesn&apos;t exist</h2>
        <Back />
      </div>
    );
  }
};

export default Details;
